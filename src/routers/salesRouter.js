const express = require('express');
const salesController = require('../controllers/salesController');
const salesMiddle = require('../middlewares/salesMiddle');

const router = express.Router();

router.get('/', salesController.openProduct);

router.get('/:id', salesMiddle, salesController.openProduct);

module.exports = router;
