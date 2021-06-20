import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { ITransaction, TransactionModel } from '../../models';

export default async function createProduct(fastify: FastifyInstance): Promise<void> {
  fastify.post('/starstore/buy', {}, async (req: FastifyRequest, reply: FastifyReply) => {
    const dadosTransacoes = req.body as ITransaction;

    const transactionModel = new TransactionModel(dadosTransacoes);

    await transactionModel.save();

    reply.status(201).send(transactionModel);
  });
}
