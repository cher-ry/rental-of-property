const router = require('express').Router();
const { Article } = require('../../db/models');
const ArticlesView = require('../../views/ArticlesView');
const MainPage = require('../../views/MainPage');

router.route('/').get(async (req, res) => {
  const user = res.locals;
  const articles = await Article.findAll({ raw: true });

  res.renderComponent(MainPage, { articles, user });
});

router.route('/').post(async (req, res) => {
  const { category } = req.body;
  const user = res.locals;
  const articles = await Article.findAll({
    where: {
      category,
    },
    raw: true,
  });
  console.log(articles);
  res.renderComponent(ArticlesView, { articles, user });
});

module.exports = router;
