import Service from "../models/service";
import connectToDatabase from "./mongodb";

//busca os serviços no banco de dados
export const getServices = async () => {
  await connectToDatabase();
  try {
    const response = await Service.find({});

    console.log("Executei services aqui hein");

    return response;
  } catch (error) {
    return error;
  }
};

// busca um servico pelo nome
export const getServiceByName = async (name) => {
  await connectToDatabase();

  try {
    const response = await Service.find({
      name: name,
    });

    // console.log("Achei esse usuario: ", response);

    return response;
  } catch (error) {
    // console.log("Error when getting the user by passed email", error);
    return Promise.reject(error);
  }
};

// busca um serviço pelo seu id
export const getServiceById = async (id) => {
  await connectToDatabase();

  try {
    const response = await Service.findById(id);

    return response;
  } catch (error) {
    console.log("Error when getting the service by passed id", error);

    return Promise.reject(error);
  }
};

// recebe um id e atualiza o serviço no banco de dados
export const updateServiceById = async (id, data) => {
  await connectToDatabase();
  try {
    const response = await Service.findByIdAndUpdate(id, data);

    const service = await getServiceById(id);
    return service;
  } catch (error) {
    console.log("Error when updating the service by passed id", error);

    return Promise.reject(error);
  }
};

// recebe um id e deleta o serviço no banco de dados
export const deleteServiceById = async (id) => {
  await connectToDatabase();

  try {
    const response = await Service.findByIdAndDelete(id);

    return response;
  } catch (error) {
    console.log("Error when deleting the service by passed id: ", error);

    return Promise.reject(error);
  }
};
