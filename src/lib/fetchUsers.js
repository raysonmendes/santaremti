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

    return response;
  } catch (error) {
    console.log("Error when getting the user by passed id", error);

    return Promise.reject(error);
  }
};

// recebe um id e atualiza o usuário no banco de dados
export const updateUserById = async (id, data) => {
  await connectToDatabase();

  const updateData = JSON.parse(data);
  try {
    const response = await User.findByIdAndUpdate(id, updateData);

    const user = await getUserById(id);
    return user;
  } catch (error) {
    console.log("Error when updating the user by passed id", error);

    return Promise.reject(error);
  }
};

// recebe um id e deleta o usuário no banco de dados
export const deleteUserById = async (id) => {
  await connectToDatabase();

  try {
    const response = await User.findByIdAndDelete(id);

    return response;
  } catch (error) {
    console.log("Error when deleting the user by passed id: ", error);

    return Promise.reject(error);
  }
};
