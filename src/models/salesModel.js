const connection = require('./connection');

const findByProductId = async (productId) => {
  const [result] = await connection.execute(
    `SELECT sa.date date, pr.id productId, sp.quantity
FROM StoreManager.sales sa
INNER JOIN StoreManager.products pr 
ON sa.id = pr.id
INNER JOIN StoreManager.sales_products sp
ON sa.id = sp.sale_id
WHERE sa.id = ?`,
    [productId],
  );
  return result;
};

const findByAllId = async () => {
  const [result] = await connection.execute(
    `SELECT pr.id saleId, sa.date date, pr.id productId, sp.quantity
FROM StoreManager.sales sa
INNER JOIN StoreManager.products pr 
ON sa.id = pr.id
INNER JOIN StoreManager.sales_products sp
ON sa.id = sp.sale_id
ORDER BY sp.sale_id`,
  );
  return result;
};

module.exports = {
  findByProductId,
  findByAllId,
};
