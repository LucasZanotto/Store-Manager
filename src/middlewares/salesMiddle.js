const findBy = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const result = await findBy.salesModel.findByAllId();
  console.log(result);

  if (id > (result.length - 1) || Number(id) === 0 || !id) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return next();
};
