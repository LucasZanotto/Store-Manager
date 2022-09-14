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
  const [result] = await connection.execute(
    `UPDATE StoreManager.products SET name = '${name}' WHERE id = ?`,
    [productId],
  );
  return result;
};

const deleteById = async (productId) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  const [result2] = await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE product_id = ?',
    [productId],
  );
  return result && result2;
};

module.exports = {
  findByProductId,
  findByAllId,
  insert,
  updateById,
  deleteById,
};
