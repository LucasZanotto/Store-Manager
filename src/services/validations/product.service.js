const { productModel } = require('../../models');

// const WAITING_PRODUCT = 1;
// const PRODUCT_ON_THE_WAY = 2;
// const PRODUCT_IN_PROGRESS = 3;
// const PRODUCT_FINISHED = 4;

const getWaitingProducts = async (id) => {
  const result = await productModel.findByProductId(id);
  return { type: null, message: result };
};

module.exports = {
  getWaitingProducts,
};