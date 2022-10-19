const router = require('express').Router();
const MainPage = require('../../views/MainPage');

router.route('/').get(async (req, res) => {
  res.renderComponent(MainPage, {});
});
module.exports = router;
