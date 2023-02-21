const { expect } = require('chai');
const sinon = require('sinon');
const { productServices } = require('../../../src/services/product.service');

const connection = require('../../../src/models/db/connection');
// const { allProducts } = require('./product.model.mock');

describe('Services unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Should return a error in case of a invalid ID', async () => {
   
     
      const result = await productServices.productById('a');
      
    
      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"id" must be a number');
  })
  // it('Should return the required product if registered on the database', async () => {
 
  // })
});
