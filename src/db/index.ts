import mongoose from 'mongoose';

import getConfiguracaoEnvironment from '../config';

const connectedStateMongoose = 1;

export async function connect(): Promise<boolean> {
  const { db } = await getConfiguracaoEnvironment();

  await mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  return mongoose.connection.readyState === connectedStateMongoose;
}

export async function disconnect(): Promise<void> {
  await mongoose.disconnect();
}

connect();
