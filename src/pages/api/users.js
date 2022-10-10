import { getToken } from "next-auth/jwt";
import clientPromise from "../../lib/mongodb";

const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const token = await getToken({ req, secret });

  //verifica o token recebido e retorna os dados em caso de um token valido
  if (token) {
    const { db } = await clientPromise();

    const users = await db.collection("users").find({}).limit(20).toArray();

    res.status(200).json(users);
  }

  return res.status(401).end();
};
