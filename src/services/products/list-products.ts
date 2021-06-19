import { FastifyInstance, FastifyReply } from 'fastify';

import { ProductModel } from '../../models/product.model';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function listProducts(fastify: FastifyInstance) {
  fastify.get('/products', {}, async (_, reply: FastifyReply) => {
    const products = await ProductModel.find();

    reply.status(200).send(products);
  });
}
