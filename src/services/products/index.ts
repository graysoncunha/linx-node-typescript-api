import { FastifyInstance } from 'fastify';

import createProduct from './create-product';

import listProducts from './list-products';

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify.register(createProduct);
  fastify.register(listProducts);
}
