import { getToken } from "next-auth/jwt";
import getServices from "../../lib/fetchServices";
import connectToDatabse from "../../lib/mongodb";
import Service from "../../models/service";

const secret = process.env.JWT_SECRET;

const handler = async (req, res) => {
  await connectToDatabse();
  //busca o token provido na requisição via cookie
  const token = await getToken({ req, secret });

  // buscar serviços
  if (req.method === "GET") {
    //verifica o token recebido e retorna os dados em caso de um token valido
    if (token) {
      try {
        const services = await getServices();

        // console.log("services que veio: ", services);
        return res.send(services);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }

    return res.status(401).end();
  }

  //criar usuario
  if (req.method === "POST") {
    const { name, description, owner, price, duoDate } = req.body;

    if (token) {
      try {
        var service = new Service({
          description,
          name,
          owner,
          price,
          duoDate,
        });

        //criar novo usuário
        var createdService = await service.save();

        return res.status(200).send(createdService);
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
