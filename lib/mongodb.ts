import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "portfolio";

declare global {
  var _mongoClient: MongoClient | undefined;
}

let client: MongoClient | null = null;

export async function getDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  if (!client) {
    if (process.env.NODE_ENV === "development" && global._mongoClient) {
      client = global._mongoClient;
    } else {
      client = new MongoClient(uri);
      await client.connect();
      if (process.env.NODE_ENV === "development") {
        global._mongoClient = client;
      }
    }
  }
  return client.db(dbName);
}
