const connection = require('./connection');

const findByProductId = async (productId) => {
  console.log(await connection);
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return result;
};

module.exports = {
  findByProductId,
};
