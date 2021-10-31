const router = require('express').Router();
const car = require('../controllers/car.controller');

module.exports = (app) => {
  router.get('/model/', car.get);
  app.use('/api/car', router);
};
