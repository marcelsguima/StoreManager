const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const  salesController  = require('../../../src/controllers/sales.controller');
const  salesService  = require('../../../src/services/sales.service');
const  { allSales, newProduct, firstSale } = require('./sales.controller.mock');


describe('Sale Controller unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });
     it('Should return 200 and the data of the requested sale', async function () {
      
      const res = {};
      const req = { params: 3 };

      res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
       
      sinon.stub(salesService, 'saleByID').resolves({ type: null, message: firstSale });

      
      await salesController.saleByID(req, res);

      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(firstSale);
    });

    it('Should return all sales', async function () {
      
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
       res.json = sinon.stub().returns();
       
      sinon.stub(salesService, 'findAllSales').resolves({ type: null, message: allSales });

      
      await salesController.findAllSales(req, res);

      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSales);
    });
  
});
