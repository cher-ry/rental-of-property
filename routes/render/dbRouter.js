const router = require('express').Router();
const { Article } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    const articles = await Article.findAll({ raw: true });
    res.json({ articles });
  });

module.exports = router;
