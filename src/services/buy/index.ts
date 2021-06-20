import { FastifyInstance } from 'fastify';

import createBuy from './create-buy';
import listBuy from './list-buy';
import listClientBuys from './list-client-buys';

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify.register(createBuy);
  fastify.register(listBuy);
  fastify.register(listClientBuys);
}
