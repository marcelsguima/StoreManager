const productService = require('../services/product.service');
const { mapError } = require('../utils/errorMap');

const findAll = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.productById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const regProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.regProduct(name);
  
  if (type) return res.status(mapError(type)).json({ message });
  
  return res.status(201).json(message);
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productService.editProduct(name, id);

  if (type) return res.status(mapError(type)).json({ message });
 
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await productService.deleteProduct(id);

  if (type) return res.status(mapError(type)).json({ message });
 
  return res.status(204).json(message);
};

module.exports = {
  findAll,
  productById,
  regProduct,
  editProduct,
  deleteProduct,
};