const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productModel');
const products = require('../../../src/services/validations/product.service');
const { CorrectProductId } = require('./mocks/productsServiceMocks');

describe('Verificando o service products', function () {
  describe('Procura de id existente', function () {
    it("id inexistente não encontrado", async function () {
      sinon.stub(productModel, "findByProductId").resolves(undefined);

      const body = { Id: 1 };
      const error = await products.getWaitingProducts(body);
      expect(error.type).to.equal(null);
      expect(error.message).to.equal(undefined);
    });
  });
});
