import buildApp from './app';

export default async function startServer(): Promise<void> {
  const server = buildApp();

  const port = 3000;

  await server.listen(port);
}
