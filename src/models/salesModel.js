const connection = require('./connection');

const findByProductId = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [productId],
  );
  return result;
};

const findByAllId = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales ORDER BY id ASC',
  );
  return result;
};

module.exports = {
  findByProductId,
  findByAllId,
};
