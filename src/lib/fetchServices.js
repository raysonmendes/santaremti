import Service from "../models/service";
import { getUserById } from "./fetchUsers";
import connectToDatabase from "./mongodb";

//busca os serviços no banco de dados
export const getServices = async () => {
  await connectToDatabase();
  try {
    let services = await Service.find({});

    services = JSON.parse(JSON.stringify(services));

    // separa os ids dos owners em uma lista
    let ownerIdList = services.map((service) => {
      return service.owner;
    });

    // converte para resultados json
    ownerIdList = JSON.parse(JSON.stringify(ownerIdList));

    // prepara lista de requests para buscar os owners por id
    let ownerRequests = ownerIdList.map(async (ownerId) => {
      const ownerResponse = await getUserById(ownerId);
      return ownerResponse;
    });

    // utiliza o Promise.all para fazer as reqs
    let populedOwners = await Promise.all(ownerRequests);
    populedOwners = JSON.parse(JSON.stringify(populedOwners));

    // percorre a lista de services e popula os dados dos owners encontrados
    let populedServices = services.map((service) => {
      let populedOwner = populedOwners.find(
        (populedOwner) => populedOwner?._id === service?.owner
      );
      return {
        ...service,
        owner: populedOwner ? populedOwner : "User desconhecido",
      };
    });

    return populedServices;
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
