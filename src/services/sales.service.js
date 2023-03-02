const salesModel = require('../models/sales.model');
// const schema = require('./validations/schemas');
const { validateSaleName } = require('./validations/inputValues');

const checkProductID = async (newSale) => {
  console.log(newSale);
  const maped = newSale.map((product) =>
    salesModel.saleByID(product.productId));
  
  const productID = await Promise.all(maped);

  return productID.some((p) => !p.length);
};

const findAllSales = async () => {
  const allProducts = await salesModel.findAllSales();

  return { type: null, message: allProducts };
};

const saleByID = async (productId) => {
  const saleProduct = await salesModel.saleByID(productId);

  if (!saleProduct.length) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  
  return { type: null, message: saleProduct };
};

const registerSale = async (newSale) => {
  // console.log(newSale);
  const errors = newSale.map((p) => validateSaleName(p));
  const Error = errors.find((error) => error.type);
  if (Error) {
    if (Error.message.includes('than')) {
      return { type: 422, message: Error.message };
    }
    return { type: 400, message: Error.message };
  }
  if (await checkProductID(newSale)) return { type: 404, message: 'Sale not found' };
  const insertId = await salesModel.registerSaleDate();

  const result = newSale.map((e) => salesModel.registerSale(insertId, e));

  const promiseInsert = await Promise.all(result);

  const response = {
    id: insertId,
    itemsSold: promiseInsert,
  };

  return { type: null, message: response };
};

module.exports = {
  registerSale,
  findAllSales,
  saleByID,
};