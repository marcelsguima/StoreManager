const connection = require('./db/connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products;
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

const regProduct = async (newProduct) => {
  console.log(newProduct);
  try {
    const [sql] = await connection.execute(
      'INSERT INTO StoreManager.products (name) VALUES (?)',
      [newProduct],  
    );
    // console.log(sql.insertId);
    return { id: sql.insertId, name: newProduct };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findAll,
  productById,
  regProduct,
};