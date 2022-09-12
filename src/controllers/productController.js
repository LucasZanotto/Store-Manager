const { productService } = require('../services/validations/index');
const errorMap = require('../utils/errorMap');

const openProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getWaitingProducts(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const productAssign = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.productAssign({ id });
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const create = async (req, res) => {
  const { name } = req.body;
  
  const newProduct = await productService.create({ name });

  res.status(201).json(newProduct);
}; 

module.exports = {
  openProduct,
  productAssign,
  create,
};
