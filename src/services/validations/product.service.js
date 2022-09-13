const { productModel } = require('../../models');

const getWaitingProducts = async (id) => {
  if (id) {
    const result = await productModel.findByProductId(id);
    return { type: null, message: result };
  } 
  const result = await productModel.findByAllId();
  return { type: null, message: result };
};

const create = async ({ name }) => {
  const newProduct = await productModel.insert({ name });
  return { id: newProduct, name };
};

module.exports = {
  getWaitingProducts,
  create,
};
