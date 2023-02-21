const { expect } = require('chai');
const sinon = require('sinon');
const  productServices  = require('../../../src/services/product.service');

describe('Services unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Should return a error in case of a invalid ID', async () => {
   
     
      const result = await productServices.productById('a');
          
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
  })

  it('Should return the correct error for product name verification', async () => {
 
    const result1 = await productServices.regProduct('as');
          
      expect(result1.type).to.equal('INVALID_VALUE');
      expect(result1.message).to.equal('\"name\" length must be at least 5 characters long');
    
    const result2 = await productServices.regProduct();
          
      expect(result2.type).to.equal('INVALID_INPUT');
      expect(result2.message).to.equal('"name" is required');
  })
  
});
