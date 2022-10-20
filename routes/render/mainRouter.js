const router = require('express').Router();
const { Article} = require('../../db/models')
const MainPage = require('../../views/MainPage');


router.route('/').get(async (req, res) => {
  const user = res.locals;
  const articles = await Article.findAll({ raw: true });
  res.renderComponent(MainPage, {articles, user});
});

module.exports = router;
