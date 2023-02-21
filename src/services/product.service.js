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

module.exports = {
  findAll,
  productById,
  regProduct,
};