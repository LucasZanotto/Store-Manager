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

const updateByProduct = async ({ name, id }) => {
  await console.log(name, id);
  await productModel.updateById(name, id);
  return { id, name };
};

const deleteByProduct = async ({ id }) => {
  await productModel.deleteById(id);
};

module.exports = {
  getWaitingProducts,
  create,
  updateByProduct,
  deleteByProduct,
};
