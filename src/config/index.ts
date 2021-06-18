interface IMongoConfig {
  name: string;
  url: string;
}

interface IConfiguracaoEnvironment {
  db: IMongoConfig;
}

async function getConfig(): Promise<IConfiguracaoEnvironment> {
  const validEnvs: string[] = ['development', 'production', 'staging', 'test'];

  const environment: string = process.env.NODE_ENV || 'development';

  if (!validEnvs.includes(environment)) {
    throw new Error(`Invalid environment: ${environment}`);
  }

  return import(`./config.${environment}.json`);
}

export default getConfig;
