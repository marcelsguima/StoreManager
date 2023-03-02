const productModel = require('../models/product.model');
const schema = require('./validations/inputValues');

const findAll = async () => {
  const allProducts = await productModel.findAll();

  return { type: null, message: allProducts };
};

const productById = async (productId) => {
  const product = await productModel.productById(productId);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: product };
};

const regProduct = async (name) => {
  const error = schema.validateName({ name });
 
  if (error.type) return error;
  
  const newProduct = await productModel.regProduct(name);
  
  return { type: null, message: newProduct };
};

const editProduct = async (name, id) => {
  const error = schema.validateName({ name });
  console.log(error);
 
  if (error.type) return error;

  const productToEdit = await productModel.productById(id);

  if (!productToEdit) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  await productModel.editProduct(name, id);
  const editedProduct = await productModel.productById(id);
  return { type: null, message: editedProduct };
};

module.exports = {
  findAll,
  productById,
  regProduct,
  editProduct,
};