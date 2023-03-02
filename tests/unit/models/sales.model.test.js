const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { allSales, saleId1 } = require('./sales.model.mock');

describe('Sales unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should return a list of all sales', async () => {
    const findAllStub = sinon.stub(connection, 'execute').resolves([allSales]);
    
    const sales = await salesModel.findAllSales();
        
    expect(sales).to.be.deep.equal(allSales);

    findAllStub.restore();
  })

  it('Should return the required sale if registered on the database', async () => {
   
    sinon.stub(connection, 'execute').resolves([saleId1]);
    
    const result = await salesModel.saleByID(1);
    
    expect(result).to.be.deep.equal(saleId1);
  })
});
