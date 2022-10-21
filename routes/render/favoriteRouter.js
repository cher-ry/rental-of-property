const router = require('express').Router();

const { Favorite, Article } = require('../../db/models');
const ArticlesView = require('../../views/ArticlesView');
const MainPage = require('../../views/MainPage');
const { getUser } = require('../../middleware/ssr');

router.route('/').post(async (req, res) => {
  const { articleID } = req.body;
  // console.log(articleID);
  const user = req.session.userId;
  try {
    const newFavorite = await Favorite.create({

      userId: user,
      articleId: articleID,
    });

    newFavorite.save();

    res.json({ favorite: true });
  } catch ({ message }) {
    console.log(message);
  }
});

router.route('/').get(async (req, res) => {
  const { userId } = req.session;
  const articles = await Article.findAll({
    include: {
      association: Article.FavoredBy,
      where: {
        id: userId,
      },
    },
    // where: {
    //   userId: user,
    // },
  });
  // console.log({ userId });
  // console.log(articles[0].FavoredBy);
  res.renderComponent(MainPage, { articles, user: userId });

});

module.exports = router;
