const { productModel } = require('../../models');
const {
  validateInputProduct,
} = require('./validateInputProduct');

// const WAITING_PRODUCT = 1;
// const PRODUCT_ON_THE_WAY = 2;
// const PRODUCT_IN_PROGRESS = 3;
// const PRODUCT_FINISHED = 4;

const getWaitingProducts = async (id) => {
  if (id) {
    const result = await productModel.findByProductId(id);
    return { type: null, message: result };
  } 
  const result = await productModel.findByAllId();
  return { type: null, message: result };
};

const productAssign = async ({ id }) => {
  const error = await validateInputProduct({ id });
  if (error.type) return error;

  const result = await productModel.findByProductId(id);
  return { type: null, message: result };
};

const create = async ({ name }) => {
  const newProduct = await productModel.insert({ name });
  return { id: newProduct, name };
};

module.exports = {
  getWaitingProducts,
  productAssign,
  create,
};
