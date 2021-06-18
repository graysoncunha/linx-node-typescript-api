import { FastifyInstance } from 'fastify';
import { FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import mongoose from 'mongoose';

export interface MyPluginOptions {
  uri: string;
}

async function ConnectDB(fastify: FastifyInstance, options: FastifyPluginOptions) {
  try {
    await mongoose.connect(options.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    fastify.log.info('conectado ao banco de dados');

    // const models: Models = { Blog };

    fastify.decorate('db', {});

    fastify.addHook('onClose', () => mongoose.disconnect());
  } catch (error) {
    console.error(error);
  }
}

export default fp(ConnectDB);
