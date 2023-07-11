const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { allProducts } = require('./product.model.mock');

describe('Products unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should return a list of products', async () => {
    const findAllStub = sinon.stub(connection, 'execute').resolves([allProducts]);
    
    const products = await productModel.findAll();
        
    expect(products).to.be.deep.equal(allProducts);

    findAllStub.restore();
  })

  it('Should return the required product if registered on the database', async () => {
   
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
    
    const result = await productModel.productById(1);
    
    expect(result).to.be.deep.equal(allProducts[0]);
  })
});
