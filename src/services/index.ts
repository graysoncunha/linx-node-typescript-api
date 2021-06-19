import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify.register(async () => {
    fastify.get('/', async (req, reply) => {
      reply.send({ hello: 'world' });
    });
  });
}
