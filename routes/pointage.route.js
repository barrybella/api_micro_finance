const express = require('express');
var jwt = require('express-jwt');
const pointageRoutes = express.Router();

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload',
  algorithms: ['HS256']
});
pointageCtr = require('../controllers/pointageControllers');



module.exports = pointageRoutes;