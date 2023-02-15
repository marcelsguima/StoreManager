const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { allProducts } = require('./product.model.mock');

describe('Products unit Test', () => {
  it('Should return a list of products', async () => {
    const findAllStub = sinon.stub(connection, 'execute').resolves([allProducts]);

    const products = await productModel.findAll();

    expect(products).to.be.deep.equal(allProducts);

    findAllStub.restore();
  })
  it('Should return the required product if registered on the database', async () => {
    const productById = sinon.stub(connection, 'execute').resolves([[allProducts]]);
    console.log(allProducts);

    const product = await productModel.productById(3);

    expect(product).to.be.deep.equal(allProducts[2]);

    productById.restore();
  })
});
