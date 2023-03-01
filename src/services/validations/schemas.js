const Joi = require('joi');

const idSchema = Joi.number().integer().min(1);
const productSchema = Joi.object({ name: Joi.string().min(5).required() });
const saleProductID = Joi.object({ productId: Joi.string().required() });

module.exports = {
  idSchema,
  productSchema,
  saleProductID,
 };