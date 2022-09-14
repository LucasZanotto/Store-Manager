const findBy = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const result = await findBy.productModel.findByAllId();
  const result2 = await result.some((item) => Number(item.id) === Number(id));
  console.log(result2);

  if ((!result2) || Number(id) === 0 || !id) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};
