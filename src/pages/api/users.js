import { getToken } from "next-auth/jwt";
import connectToDatabse from "../../lib/mongodb";
import User from "../../models/user";

const secret = process.env.JWT_SECRET;

const handler = async (req, res) => {
  //busca o token provido na requisição via cookie
  const token = await getToken({ req, secret });
  await connectToDatabse();

  // buscar usuários
  if (req.method === "GET") {
    //verifica o token recebido e retorna os dados em caso de um token valido
    if (token) {
      try {
        const users = await User.find({});
        return res.send(users);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }

    return res.status(401).end();
  }

  //criar usuario
  if (req.method === "POST") {
    const { name, email, roles, avatarUri, cpf } = req.body;

    if (token) {
      try {
        var user = new User({
          name,
          email,
          roles,
          avatarUri,
          cpf,
        });

        //criar novo usuário
        var createdUser = await user.save();

        return res.status(200).send(createdUser);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }
    return res.status(401).end();
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
