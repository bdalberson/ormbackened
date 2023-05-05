const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  const products = await Product.findAll({
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        through: {
          attributes: []
        }
      }
    ]
  });
  res.json(products);
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  const product = await Product.findByPk(req.params.id, {
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        through: {
          attributes: []
        }
      }
    ]
  
  });      
  res.json(product);
});

// create new product
router.post('/', async (req, res) => {

    const product = await Product.create(req.body);
    res.json(product);

    res.json(error);
});

// update product
router.put('/:id', async(req, res) => {
   await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
  });

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  const deletedProduct = await Product.destroy({
    where: { id: req.params.id },
  });
  res.json({ alert: 'Category deleted' });
  console.log("Product updated!")
});

module.exports = router;
