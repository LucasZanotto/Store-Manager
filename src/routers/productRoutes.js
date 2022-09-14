const express = require('express');
const productController = require('../controllers/productController');
const productMiddle = require('../middlewares/ProductMiddle');
const charactersMiddle = require('../middlewares/CaractersMiddle');

const router = express.Router();

router.get('/', productController.openProduct);

router.get('/:id', productMiddle, productController.openProduct);

router.post('/', charactersMiddle, productController.create);

router.delete('/:id', productMiddle, productController.deleteByProduct);

router.put(
  '/:id',
  charactersMiddle,
  productMiddle,
  productController.updateByProduct,
);

module.exports = router;