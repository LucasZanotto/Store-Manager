const { productService } = require('../services/validations/index');
const errorMap = require('../utils/errorMap');

const openProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getWaitingProducts(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const create = async (req, res) => {
    const { name } = req.body;
    
    const newProduct = await productService.create({ name });
  
    res.status(201).json(newProduct);
}; 

const updateByProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  console.log(name, id);

  const newProduct = await productService.updateByProduct({ name, id });

  res.status(200).json(newProduct);
}; 

const deleteByProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  await productService.deleteByProduct({ id });

  res.status(204);
}; 

module.exports = {
  openProduct,
  create,
  updateByProduct,
  deleteByProduct,
};
