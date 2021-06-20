import buildApp from '../../src/app';
import { dropCollections } from '../test-helpers';

const urlBase = 'http://localhost:3000/starstore';

describe('superstore: testa os endpoints', () => {
  let buyMock: any;

  beforeAll(() => {
    buyMock = {
      client: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
      clientName: 'Luke Skywalker',
      totalToPay: 1236,
      creditCard: {
        cardNumber: '1234123412341234',
        value: 7990,
        cvv: 789,
        cardHolderName: 'Luke Skywalker',
        expirationDate: '12/24',
      },
    };
  });

  beforeEach(async () => {
    await dropCollections();
  });

  it('starstore: deve cadastrar uma compra', async () => {
    const fastify = buildApp();

    const { statusCode } = await fastify.inject({
      method: 'POST',
      url: `${urlBase}/buy`,
      payload: buyMock,
    });

    await fastify.close();

    expect(statusCode).toBe(201);
  });

  it('starstore: deve listar todas as compras da loja', async () => {
    const fastify = buildApp();

    await fastify.inject({
      method: 'POST',
      url: `${urlBase}/buy`,
      payload: buyMock,
    });

    const { statusCode, body } = await fastify.inject({
      method: 'GET',
      url: `${urlBase}/history`,
    });

    const objectBody = JSON.parse(body);

    await fastify.close();

    expect(statusCode).toBe(200);
    expect(objectBody).toBeGreaterThanOrEqual(1);
  });

  it('starstore: deve listar todas as compras de um cliente', async () => {
    const fastify = buildApp();

    await fastify.inject({
      method: 'POST',
      url: `${urlBase}/buy`,
      payload: buyMock,
    });

    const { statusCode, body } = await fastify.inject({
      method: 'GET',
      url: `${urlBase}/history/7e655c6e-e8e5-4349-8348-e51e0ff3072e`,
    });

    const objectBody = JSON.parse(body);

    await fastify.close();

    expect(statusCode).toBe(200);
    expect(objectBody[0].client).toBe('7e655c6e-e8e5-4349-8348-e51e0ff3072e');
  });
});
