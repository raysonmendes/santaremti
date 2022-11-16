import { getToken } from "next-auth/jwt";
import { getUserByEmail, getUserById } from "../../../lib/fetchUsers";
import connectToDatabase from "../../../lib/mongodb";

const secret = process.env.JWT_SECRET;

const handler = async (req, res) => {
  await connectToDatabase();

  const token = await getToken({ req, secret });
  const { user: email } = req.query;

  if (req.method === "GET") {
    if (token) {
      try {
        const user = await getUserById(email);

        return res.send(user);
      } catch (error) {
        console.log("erro ao buscar user: ", error);

        return res.status(500).send(error.message);
      }
    }

    return res.status(401).end();
  }
};

export default handler;
