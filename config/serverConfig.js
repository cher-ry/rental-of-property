const express = require('express');
const cookieParser = require('cookie-parser');

const morgan = require('morgan');

const session = require('express-session');

const sessionConfig = require('./sessionConfig');

const { resLocals, getUser } = require('../middleware/ssr');

const {ssr} = require('../middleware/ssr');

const config = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(session(sessionConfig));
  app.use(resLocals);
  app.use(getUser);
  app.use(ssr);
};


module.exports = config;

