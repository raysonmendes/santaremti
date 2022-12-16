import { getToken } from "next-auth/jwt";
import { createOffer } from "../../../../../lib/fetchOffers";

import connectToDatabse from "../../../../../lib/mongodb";

const secret = process.env.JWT_SECRET;

const handler = async (req, res) => {
  await connectToDatabse();
  //busca o token provido na requisição via cookie
  const token = await getToken({ req, secret });

  //criar proposta
  if (req.method === "POST") {
    // todo
    // verificar pq o json nao funciona
    const { offeredPrice, offerer, description } = req.body;

    if (token) {
      const { service: serviceId } = req.query;

      console.log("requaa: ", serviceId);
      console.log("body: ", req.body);

      const offerData = {
        offeredPrice: offeredPrice,
        offerer: offerer,
        description: description,
      };

      try {
        const createdOffer = await createOffer(serviceId, offerData);
        console.log("atualizei com esse: ", createdOffer);
        return res.status(200).send(createdOffer);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }
    return res.status(401).end();
  }
  if (req.method === "PUT") {
    console.log("atualizar recurso");
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default handler;

// import { getToken } from "next-auth/jwt";
// import clientPromise from "../../lib/mongodb";

// const secret = process.env.JWT_SECRET;

// export default async (req, res) => {
//   const token = await getToken({ req, secret });

//   //verifica o token recebido e retorna os dados em caso de um token valido
//   if (token) {
//     const { db } = await clientPromise();

//     const users = await db.collection("users").find({}).limit(20).toArray();

//     res.status(200).json(users);
//   }

//   return res.status(401).end();
// };
