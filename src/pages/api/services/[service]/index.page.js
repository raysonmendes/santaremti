import { getToken } from "next-auth/jwt";
import {
  deleteServiceById,
  getServiceById,
  updateServiceById,
} from "../../../../lib/fetchServices";
import connectToDatabase from "../../../../lib/mongodb";

const secret = process.env.JWT_SECRET;

// responsável por tratar as requisições que chegam no endpoint /api/users/[id]
const handler = async (req, res) => {
  await connectToDatabase();

  const token = await getToken({ req, secret });
  const { service: serviceId } = req.query;
  console.log("servicoe id: ", serviceId);
  const data = req.body;

  if (req.method === "GET") {
    if (token) {
      try {
        const service = await getServiceById(serviceId);

        return res.send(service);
      } catch (error) {
        console.log("erro ao buscar service: ", error);

        return res.status(500).send(error.message);
      }
    }

    return res.status(401).end();
  }

  if (req.method === "PUT") {
    if (token) {
      try {
        const service = await updateServiceById(serviceId, data);

        console.log("servico atualizado dados: ", data);
        console.log("servico atualizado: ", service);
        return res.send(service);
      } catch (error) {
        console.log("erro ao atualizar service: ", error);
        return res
          .status(500)
          .send(
            "Error when updating the service by passed id: " + error.message
          );
      }
    }
  }

  if (req.method === "DELETE") {
    if (token) {
      try {
        const response = await deleteServiceById(serviceId);

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
