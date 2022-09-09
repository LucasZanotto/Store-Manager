const { productService } = require('../services/validations/index');
const errorMap = require('../utils/errorMap');

const openProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getWaitingProducts(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

module.exports = {
  openProduct,
};
