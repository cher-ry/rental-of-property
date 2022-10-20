const router = require('express').Router();
const { Article} = require('../../db/models')
const MainPage = require('../../views/MainPage');


router.route('/').get(async (req, res) => {
  const user = res.locals;
  const articles = await Article.findAll({ raw: true });

  // const rooms = await Article.findAll({ 
  //   where: {
  //     category,
  //   },
  // });


  res.renderComponent(MainPage, {articles, user });
});

router.route('/').post(async (req, res) => {
  const {category} = req.body;
  const user = res.locals;
  const articles = await Article.findAll({
    where: {
      category,
    },
  });
console.log(articles)
  res.renderComponent(MainPage, {articles, user});

});


module.exports = router;
