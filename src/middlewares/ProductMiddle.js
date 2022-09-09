module.exports = (req, res, next) => {
  const { id } = req.params;

  if (id > 3 || Number(id) === 0 || !id) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};
