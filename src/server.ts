import path from 'path';

import { fastify } from 'fastify';
import autoLoad from 'fastify-autoload';
import connectDbPlugin from './plugins/db-connector';

const server = fastify({});

const apiPath = path.join(__dirname, 'services');

// register plugin below:
server.register(connectDbPlugin);

server.register(autoLoad, {
  dir: apiPath,
  dirNameRoutePrefix: false,
  maxDepth: 1,
});

async function startServer(): Promise<void> {
  const port = 3000;

  await server.listen(port);

  console.log('Server started successfully');
}

startServer();
