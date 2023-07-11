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
    const [sql] = await connection.execute(
      'INSERT INTO StoreManager.products (name) VALUES (?)',
      [newProduct],  
    
  );
  return { id: sql.insertId, name: newProduct };
};

const editProduct = async (name, id) => {
  try {
    const [sql] = await connection.execute(
      'UPDATE StoreManager.products SET name = ? WHERE id = ?',
      [name, id],
);
    return sql;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const [sql] = await connection.execute(
      'DELETE FROM StoreManager.products WHERE id = ?',
      [id],
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
  editProduct,
  deleteProduct,
};