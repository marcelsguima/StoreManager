const express = require('express');
const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/:id', productController.productById);
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.regProduct);

module.exports = productRouter;