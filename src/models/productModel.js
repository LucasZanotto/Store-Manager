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

const updateById = async (name, productId) => {
  console.log(name, productId);
  const [result] = await connection.execute(
    `UPDATE StoreManager.products SET name = '${name}' WHERE id = ?`,
    [productId],
  );
  return result;
};

module.exports = {
  findByProductId,
  findByAllId,
  insert,
  updateById,
};
