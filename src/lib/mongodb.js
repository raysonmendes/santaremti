import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI env var");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

// import mongoose from "mongoose";

// const connectToDatabase = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     // use current db connection
//     return handler(req, res);
//   }

//   // use new db conncection
//   await mongoose.connect(process.env.mongodburl, {
//     useUnifiedTopology: true,
//     // useFindAndModify: false,
//     // useCreateIndex: true,
//     useNewUrlParser: true,
//   });

//   return handler(req, res);
// };

// export default connectToDatabase;

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const dbname = process.env.MONGODB_DB;

// let cachedDb;
// let cachedClient;

// if (!uri) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (!dbname) {
//   throw new Error("Please define the MONGODB_DB variable");
// }

// export async function connectToDatabase() {
//   if (cachedDb && cachedClient) {
//     return { client: cachedClient, db: cachedDb };
//   }

//   const client = await MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const db = await client.db(dbname);

//   cachedClient = client;
//   cachedDb = db;

//   return { client, db };
// }

// export default connectToDatabase;
