const connection = require('./connection');

const findByProductId = async (productId) => {
  const [result] = await connection.execute(
    `SELECT pr.id saleId, sa.date date, pr.id productId, sp.quantity
FROM StoreManager.sales sa
INNER JOIN StoreManager.sales_products sp
ON sa.id = sp.sale_id
INNER JOIN StoreManager.products pr 
ON sp.product_id = pr.id
WHERE sa.id = ?
ORDER BY pr.id`,
    [productId],
  );
  return result;
};

const findByAllId = async () => {
  const [result] = await connection.execute(
    `SELECT pr.id saleId, sa.date date, pr.id productId, sp.quantity
FROM StoreManager.sales sa
INNER JOIN StoreManager.sales_products sp
ON sa.id = sp.sale_id
INNER JOIN StoreManager.products pr 
ON sp.product_id = pr.id
ORDER BY sp.sale_id, pr.id`,
  );
  return result;
};

module.exports = {
  findByProductId,
  findByAllId,
};
