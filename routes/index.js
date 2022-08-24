const express = require('express');

const loginRouter = require('./login.router');
const usersRouter = require('./users.router');
const dbRouter = require('./db.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/tei/api/v1', router);
  router.use('/login', loginRouter);
  router.use('/users', usersRouter);
  router.use('/db', dbRouter);
}

module.exports = routerApi;
