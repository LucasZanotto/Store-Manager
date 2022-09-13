const express = require('express');
const salesController = require('../controllers/salesController');
// const productMiddle = require("../middlewares/ProductMiddle");

const router = express.Router();

router.get('/', salesController.openProduct);

router.get('/:id', salesController.openProduct);

module.exports = router;
