import buildApp from './app';

async function startServer(): Promise<void> {
  const server = buildApp();

  const port = 3000;

  await server.listen(port);

  console.log('Server started successfully');
}

startServer();
