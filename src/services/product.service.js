const productModel = require('../models/product.model');
const schema = require('./validations/inputValues');

const findAll = async () => {
  const allProducts = await productModel.findAll();
  return { type: null, message: allProducts };
};

const productById = async (productId) => {
  const error = schema.validateId(productId);
  if (error.type) return error;

  const product = await productModel.productById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const regProduct = async (product) => {
  const newProduct = await productModel.regProduct(product);
  return newProduct;
};

module.exports = {
   findAll,
  productById,
  regProduct,
};