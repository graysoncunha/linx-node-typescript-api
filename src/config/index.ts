async function getConfig(): Promise<File> {
  const validEnvs = ['development', 'production', 'staging', 'test'];

  if (!validEnvs.includes(process.env.NODE_ENV || 'development')) {
    throw new Error(`Invalid environment: ${process.env.NODE_ENV}`);
  }

  return import(`./config.${process.env.NODE_ENV}.json`);
}

export default getConfig;
