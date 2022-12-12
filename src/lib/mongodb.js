import mongoose from "mongoose";

let MONGODB_URI = process.env.MONGODB_URI;

//opcionalmente, e caso se tenha o docker instalado localmente, pode-se usar a string de conexão local do mongodb
let isDev = false;
if (isDev) {
  MONGODB_URI = process.env.MONGODB_URI_LOCAL;
}

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
