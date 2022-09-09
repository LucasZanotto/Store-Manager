module.exports = (req, res, next) => {
  const { id } = req.params;

  if (!id) { return res.status(404).json({ message: 'Product not found' }); }

  return next();
};
