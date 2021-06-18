import { fastify } from 'fastify';

const port: number = Number(process.env.PORT) || 3000;

const uri: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogs';

const server = fastify({});

// register plugin below:

const start = async () => {
  try {
    await server.listen(port);
    console.log('Server started successfully');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
