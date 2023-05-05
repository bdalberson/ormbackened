const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  const categories = await Category.findAll({
    include: [Product],
  });
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findByPk(req.params.id, {
    include: [Product],
  });
  res.json(category);
});

router.post('/',async (req, res) => {
  // create a new category
  const category = await Category.create(req.body);
  res.json(category);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category = await Category.findByPk(req.params.id);
  await category.update(req.body);
    res.json(category);
    console.log("category updated")

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const products = await Product.findAll({
    where: { category_id: req.params.id },
    limit: 1,
  });
  if (products.length > 0) {
    return res.status(400).json({ error: "cant delete a category with products in it" });
  }
  const category = await Category.findByPk(req.params.id);
  await category.destroy();   
    res.json({ alert: 'Category deleted' });
});

module.exports = router;