import User from "../models/user";
import connectToDatabase from "./mongodb";

//busca os usuários no banco de dados
export const getUsers = async () => {
  await connectToDatabase();
  try {
    const response = await User.find({});

    console.log("Executei users aqui hein");

    return response;
  } catch (error) {
    return error;
  }
};

export const getUserByEmail = async (email) => {
  await connectToDatabase();

  try {
    const response = await User.find({
      email: email,
    });

    console.log("Achei esse usuario: ", reponse);
  } catch (error) {
    console.log("Error when getting the user by passed email", error);
    return error;
  }
};
