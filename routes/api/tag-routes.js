const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll({
    include: [{ model: Product }],
  });
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  res.json(tag)
});

router.post('/', async(req, res) => {
  const tag = await Tag.create(req.body);
    res.status(200).json(tag);
    console.log("new tag created")
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json({ response: "Tag updated successfully" });
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id

      
    }
  }).then(() => {
    res.json({ alert: "Tag deleted successfully" });
  })
});

module.exports = router;
