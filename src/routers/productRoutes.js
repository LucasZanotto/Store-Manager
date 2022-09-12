const express = require('express');
const productController = require('../controllers/productController');
const productMiddle = require('../middlewares/ProductMiddle');

const router = express.Router();

router.get('/', productController.openProduct);

router.get('/:id', productMiddle, productController.openProduct);

router.post('/', productController.create);

module.exports = router;