import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { ProductModel } from '../../models/product.model';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function createProduct(fastify: FastifyInstance) {
  fastify.post('/products', {}, async (req: FastifyRequest, reply: FastifyReply) => {
    const dadosProduto = req.body;

    const productModel = new ProductModel(dadosProduto);

    await productModel.save();

    reply.status(201).send(productModel);
  });
}
