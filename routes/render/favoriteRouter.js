const router = require('express').Router();

const { Favorite, Article } = require('../../db/models');
const { getUser } = require('../../middleware/ssr');
const FavoritesView = require('../../views/FavoritesView');

router.route('/').post(async (req, res) => {
  const { articleID } = req.body;
  // console.log(articleID);
  const user = req.session.userId;
  try {
    const newFavorite = await Favorite.create({

      userId: user,
      articleId: articleID,
    });
    console.log(newFavorite);

    res.json({ favorite: true });
  } catch ({ message }) {
    console.log(message);
    res.json({ favorite: false });
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
  res.renderComponent(FavoritesView, { articles, user: userId });
});
router.delete('/:articleId', async (req, res) => {
  const { articleId } = req.params;
  console.log(articleId.articleId);
  const { userId } = res.locals;

  console.log(userId);
  try {
    const newFavorite = await Favorite.destroy({
      where: {
        userId,
        articleId,
      },
    });

    res.json({ result: true });
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = router;
