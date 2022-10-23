import User from "../models/user";
import connectToDatabase from "./mongodb";

//busca os usuários no banco de dados
const getUsers = async () => {
  await connectToDatabase();
  try {
    const response = await User.find({});

    console.log("Executei users aqui hein");

    return response;
  } catch (error) {
    return error;
  }
};

export default getUsers;
