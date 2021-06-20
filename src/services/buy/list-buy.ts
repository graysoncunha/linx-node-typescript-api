import { FastifyInstance, FastifyReply } from 'fastify';

import { TransactionModel } from '../../models';

export default async function createProduct(fastify: FastifyInstance): Promise<void> {
  fastify.get('/starstore/history', {}, async (_, reply: FastifyReply) => {
    const trasactions = await TransactionModel.find();

    reply.status(201).send(trasactions);
  });
}
