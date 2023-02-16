const camelize = require('camelize');
const connection = require('./db/connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(products);
};

const productById = async (id) => {
  try {
    const [[sql]] = await connection.execute(
      'SELECT * FROM products WHERE id = (?)',
      [id],
);
    return sql;
  } catch (error) {
    console.log(error);
  }
};

const regProduct = async (newProduct, id) => {
  try {
    const [[sql]] = await connection.execute(
      'INSERT INTO products (name, id) VALUES (?, ?)',
      [newProduct], [id], 
);
    return sql;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findAll,
  productById,
  regProduct,
};