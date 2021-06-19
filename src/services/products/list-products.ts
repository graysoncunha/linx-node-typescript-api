import { FastifyInstance, FastifyReply } from 'fastify';

import { ProductModel } from '../../models/product.model';

export default async function listProducts(fastify: FastifyInstance): Promise<void> {
  fastify.get('/products', {}, async (_, reply: FastifyReply) => {
    const products = await ProductModel.find();

    reply.status(200).send(products);
  });
}
