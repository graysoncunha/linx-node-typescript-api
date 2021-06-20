import buildApp from '../../src/app';
import { dropCollections } from '../test-helpers';

const urlProducts = 'http://localhost:3000/products';

describe('product: testa os endpoints', () => {
  beforeEach(async () => {
    await dropCollections();
  });

  it('product: deve cadastrar um produto', async () => {
    const fastify = buildApp();

    const { statusCode } = await fastify.inject({
      method: 'POST',
      url: urlProducts,
      payload: {
        title: 'Blusa do Imperio',
        price: 7990,
        zipcode: '78993-000',
        seller: 'João da Silva',
        thumbnailHd: 'https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg',
        date: '26/11/2015',
      },
    });

    await fastify.close();

    expect(statusCode).toBe(201);
  });

  it('product: deve consultar todos os produtos', async () => {
    const fastify = buildApp();

    const { statusCode, body } = await fastify.inject({
      method: 'GET',
      url: urlProducts,
    });

    await fastify.close();

    const products = JSON.parse(body);

    expect(statusCode).toBe(200);
    expect(products).toStrictEqual([]);
  });
});
