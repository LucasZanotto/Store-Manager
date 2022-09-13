const findBy = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const result = await findBy.productModel.findByAllId();

  if (id > result.length || Number(id) === 0 || !id) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return next();
};
