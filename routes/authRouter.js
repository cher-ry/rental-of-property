const router = require('express').Router();
// const bcrypt = require('bcrypt');
const Authentication = require('../views/Authentication');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Authentication, {});
});



module.exports = router;