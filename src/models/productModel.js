const connection = require('./connection');

const findByProductId = async (productId) => {
    const [[result]] = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id = ?',
      [productId],
    );
    return result;
};

const findByAllId = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

module.exports = {
  findByProductId,
  findByAllId,
};
