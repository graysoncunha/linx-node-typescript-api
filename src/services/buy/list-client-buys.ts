import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { TransactionModel } from '../../models';

interface IListClientBuysParam {
  clientId: string;
}

export default async function createProduct(fastify: FastifyInstance): Promise<void> {
  fastify.get('/starstore/history/:clientId', {}, async (req: FastifyRequest, reply: FastifyReply) => {
    const { clientId } = req.params as IListClientBuysParam;

    const trasactions = await TransactionModel.find({ client: clientId });

    reply.status(200).send(trasactions);
  });
}
