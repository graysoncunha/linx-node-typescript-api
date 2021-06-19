import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { ProductModel } from '../../models/product.model';

export default async function createProduct(fastify: FastifyInstance): Promise<void> {
  fastify.post('/products', {}, async (req: FastifyRequest, reply: FastifyReply) => {
    const dadosProduto = req.body;

    const productModel = new ProductModel(dadosProduto);

    await productModel.save();

    reply.status(201).send(productModel);
  });
}
