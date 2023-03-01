const connection = require('./db/connection');

const registerSaleDate = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (default)', [],
  );
  return insertId;
};

const registerSale = async (saleID, { productID, productQuantity }) => {
  await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleID, productID, productQuantity],  
    
  );
  return { productID, productQuantity };
};

const findAllSales = async () => {
  const [sales] = await connection.execute(
      `
      SELECT saleProduct.sale_id AS saleId, 
      sale.date, saleProduct.product_id AS productId, saleProduct.quantity
      FROM StoreManager.sales AS sale
      INNER JOIN StoreManager.sales_products AS saleProduct
      ON saleProduct.sale_id = sale.id
    `,
  );
  return sales;
};

const saleByID = async (id) => {
  try {
    const [sql] = await connection.execute(
      `
      SELECT sale.date, saleProduct.product_id AS productId, saleProduct.quantity
      FROM StoreManager.sales AS sale
      INNER JOIN StoreManager.sales_products AS saleProduct
      ON saleProduct.sale_id = sale.id
      WHERE saleProduct.sale_id = ?
      ORDER BY saleProduct.sale_id, saleProduct.product_id
    `,
      [id],
);
    return sql;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  registerSale,
  registerSaleDate,
  findAllSales,
  saleByID,
};