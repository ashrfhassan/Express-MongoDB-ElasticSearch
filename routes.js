const express = require('express');
const router = express.Router();
// import controllers
const brandsController = require('./controllers/brandsController');

// brands routes
router.get('/brands', brandsController.getBrands);
router.get('/addbrand/:name/:description', brandsController.addBrand);

module.exports = router;