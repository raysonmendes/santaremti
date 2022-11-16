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

// busca um usuário pelo email
export const getUserByEmail = async (email) => {
  await connectToDatabase();

  try {
    const response = await User.find({
      email: email,
    });

    // console.log("Achei esse usuario: ", response);

    return response;
  } catch (error) {
    // console.log("Error when getting the user by passed email", error);
    return Promise.reject(error);
  }
};

// busca um usuário pelo seu id
export const getUserById = async (id) => {
  await connectToDatabase();

  try {
    const response = await User.findById(id);

    // console.log("user encontrado: ", response);
    return response;
  } catch (error) {
    console.log("Error when getting the user by passed id", error);

    return Promise.reject(error);
  }
};
