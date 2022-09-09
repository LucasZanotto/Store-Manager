const express = require('express');
const productController = require('../controllers/productController');
const productMiddle = require('../middlewares/ProductMiddle');

const router = express.Router();

router.get('/:id', productMiddle, productController.openProduct);

module.exports = router;