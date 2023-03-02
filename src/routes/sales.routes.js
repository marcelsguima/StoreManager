const express = require('express');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

// salesRouter.post('/', salesController.registerSale);
salesRouter.get('/', salesController.findAllSales);
salesRouter.get('/:id', salesController.saleByID);

module.exports = salesRouter;