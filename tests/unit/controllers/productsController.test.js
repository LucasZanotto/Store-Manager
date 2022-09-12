const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../src/app');

const connection = require('../../../src/models/connection');

const { CorrectProductId } = require('./mocks/productController');

describe('Teste de integração de products', function () {
  it("testando o controller", async function () {
    sinon
      .stub(connection, "execute")
      .onFirstCall()
      .resolves([[CorrectProductId]])

    const response = await chai
      .request(app)
      .get("/products");

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal([CorrectProductId]);
  });
  afterEach(sinon.restore);
})