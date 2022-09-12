const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');

const { products, productsFromDB } = require('./mocks/productsModelMocks');

describe('Testes de unidade no Model de products', function () {
  it('Realizando o GET com o id do model products', async function () {
    sinon.stub(connection, 'execute').resolves([[productsFromDB[0]]]);

    const result = await productModel.findByProductId(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  it("Realizando o GET em todos os ids do models products", async function () {
    sinon.stub(connection, "execute").resolves([[productsFromDB[0]]]);

    const [result] = await productModel.findByAllId();

    expect(result).to.be.deep.equal(products[0]);
  });

  this.afterEach(sinon.restore);
})