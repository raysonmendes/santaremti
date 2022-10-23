import Service from "../models/service";
import connectToDatabase from "./mongodb";

//busca os serviços no banco de dados
const getServices = async () => {
  console.log("to executando get sertvices");
  await connectToDatabase();
  const response = await Service.find({});

  return response;
};

export default getServices;
