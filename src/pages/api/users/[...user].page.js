import { getToken } from "next-auth/jwt";
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "../../../lib/fetchUsers";
import connectToDatabase from "../../../lib/mongodb";

const secret = process.env.JWT_SECRET;

// responsável por tratar as requisições que chegam no endpoint /api/users/[id]
const handler = async (req, res) => {
  await connectToDatabase();

  const token = await getToken({ req, secret });
  const { user: userId } = req.query;
  const data = req.body;

  if (req.method === "GET") {
    if (token) {
      try {
        const user = await getUserById(userId);

        return res.send(user);
      } catch (error) {
        console.log("erro ao buscar user: ", error);

        return res.status(500).send(error.message);
      }
    }

    return res.status(401).end();
  }

  if (req.method === "PUT") {
    if (token) {
      try {
        // console.log("user atualizado: ", user);

        const user = await updateUserById(userId, data);

        return res.send(user);
      } catch (error) {
        console.log("erro ao atualizar user: ", error);
        return res
          .status(500)
          .send("Error when updating the user by passed id: " + error.message);
      }
    }
  }

  if (req.method === "DELETE") {
    if (token) {
      try {
        const response = await deleteUserById(userId);

        return res.send();
      } catch (error) {
        console.log("erro ao deletar user: ", error);

        return res
          .status(500)
          .send(
            "Error when trying to delete the user by passed id: ",
            error.message
          );
      }
    }
  }
};

export default handler;
