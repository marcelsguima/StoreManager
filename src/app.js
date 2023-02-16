const express = require('express');
const productRouter = require('./routes/product.routes');

const app = express();
app.use(express.json());

app.use('/products', productRouter);

app.get('/products/:id', productRouter);

app.post('/', productRouter);

// app.post('/products', async (req, res) => {
//   // const { name } = req.body;
//   console.log(req.body);
//   const allProducts = await productModel.findAll();
//   // console.log(req);
//   const newProduct = { id: allProducts.length + 1, ...req.body };
//   const { id } = newProduct;
//   await productModel.regProduct((newProduct));
//   const product = { id, name: req.body.name };
//   res.status(201).json(product);
// });

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;