import mongoose from 'mongoose';

import { connect, disconnect } from '../src/db';

export async function dropCollections() {
  await connect();

  const collections = await mongoose.connection.db.collections();

  for (const { collectionName } of collections) {
    await mongoose.connection.dropCollection(collectionName);
  }

  await disconnect();
}
