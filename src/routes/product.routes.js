const express = require('express');
const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/:id', productController.productById);
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.regProduct);
productRouter.put('/:id', productController.editProduct);

module.exports = productRouter;