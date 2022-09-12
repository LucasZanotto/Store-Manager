const { productModel } = require('../../models');

const validateInputProduct = async ({ id }) => {
  const product = await productModel.findByProductId(id);
  if (!product) return { type: null, message: 'product id not found' };
};

module.exports = {
  validateInputProduct,
};
