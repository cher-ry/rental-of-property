const router = require('express').Router();

const { Favorite, Article } = require('../../db/models');

const FavoritesView = require('../../views/FavoritesView');

router.route('/').get(async (req, res) => {
  const { user } = res.locals;

  const favorites = await Favorite.findAll({
    where: { userId: user.id },
    include: {
      raw: true,
      model: Article,
    },
  });
  res.renderComponent(FavoritesView, { favorites, user });
});

module.exports = router;
