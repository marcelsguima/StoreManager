const express = require('express');
const productModel = require('./models/product.model');

const app = express();

app.get('/products', async (req, res) => {
  const allProducts = await productModel.findAll();
  res.status(200).json(allProducts);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const productById = await productModel.productById(id);
  if (!productById) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(productById);
});

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;