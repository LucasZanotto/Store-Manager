const connection = require('./connection');

const insert = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

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
  insert,
};
