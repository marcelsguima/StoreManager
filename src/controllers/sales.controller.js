const salesService = require('../services/sales.service');
const { mapError } = require('../utils/errorMap');

const findAllSales = async (_req, res) => {
  const { type, message } = await salesService.findAllSales();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const saleByID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.saleByID(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const registerSale = async (req, res) => {
  // const { productID, productQuantity } = req.body;
//  console.log(req.body);

  const { type, message } = await salesService.registerSale(req.body);
  
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  registerSale,
  findAllSales,
  saleByID,
};