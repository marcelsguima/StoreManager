const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const  productController  = require('../../../src/controllers/product.controller');
const  productService  = require('../../../src/services/product.service');
const  { allProducts, newProduct, thirdProduct } = require('./product.controller.mock');


describe('Controller unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });
     it('Should return 200 and the data of the requested product', async function () {
      
      const res = {};
      const req = { params: 3 };

      res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
       
      sinon.stub(productService, 'productById').resolves({ type: null, message: thirdProduct });

      
      await productController.productById(req, res);

      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(thirdProduct);
    });

    it('Should return all products', async function () {
      
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
       
      sinon.stub(productService, 'findAll').resolves({ type: null, message: allProducts });

      
      await productController.findAll(req, res);

      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts);
    });
  
});
