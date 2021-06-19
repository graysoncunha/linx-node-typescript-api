import { FastifyInstance } from 'fastify';

import fp from 'fastify-plugin';

import { connect, disconnect } from '../db';
export interface MyPluginOptions {
  uri: string;
}

async function connectDB(fastify: FastifyInstance) {
  await connect();

  fastify.log.info('conectado ao banco de dados');

  fastify.addHook('onClose', () => disconnect());
}

export default fp(connectDB);
