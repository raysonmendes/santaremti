import Service from "../models/service";
import { getUserById } from "./fetchUsers";
import { getServiceById, updateServiceById } from "./fetchServices";
import connectToDatabase from "./mongodb";

// //busca os serviços no banco de dados
// export const getServices = async () => {
//   await connectToDatabase();
//   try {
//     let services = await Service.find({});

//     services = JSON.parse(JSON.stringify(services));

//     // separa os ids dos owners em uma lista
//     let ownerIdList = services.map((service) => {
//       return service.owner;
//     });

//     // converte para resultados json
//     ownerIdList = JSON.parse(JSON.stringify(ownerIdList));

//     // prepara lista de requests para buscar os owners por id
//     let ownerRequests = ownerIdList.map(async (ownerId) => {
//       const ownerResponse = await getUserById(ownerId);
//       return ownerResponse;
//     });

//     // utiliza o Promise.all para fazer as reqs
//     let populedOwners = await Promise.all(ownerRequests);
//     populedOwners = JSON.parse(JSON.stringify(populedOwners));

//     // percorre a lista de services e popula os dados dos owners encontrados
//     let populedServices = services.map((service) => {
//       let populedOwner = populedOwners.find(
//         (populedOwner) => populedOwner?._id === service?.owner
//       );
//       return {
//         ...service,
//         owner: populedOwner ? populedOwner : "User desconhecido",
//       };
//     });

//     return populedServices;
//   } catch (error) {
//     return error;
//   }
// };

// // busca um servico pelo nome
// export const getServiceByName = async (name) => {
//   await connectToDatabase();

//   try {
//     const response = await Service.find({
//       name: name,
//     });

//     // console.log("Achei esse usuario: ", response);

//     return response;
//   } catch (error) {
//     // console.log("Error when getting the user by passed email", error);
//     return Promise.reject(error);
//   }
// };

// busca um serviço pelo seu id
export const createOffer = async (serviceId, offerData) => {
  await connectToDatabase();

  try {
    // busca o service correspondente
    console.log("id do service: ", serviceId);
    console.log("offerdata: ", offerData);
    let service = await getServiceById(serviceId);

    service = JSON.parse(JSON.stringify(service));
    console.log("recebi o servicesss: ", service);
    // guarda as propostas em um array
    const offers = [...service.offers];

    // adiciona a nova proposta
    let newOffers = offers;
    newOffers.push(offerData);

    console.log("tem em offers: ", offers);
    console.log("tem em new offers: ", offers);

    let newService = { ...service, offers: newOffers };

    newService = JSON.stringify(newService);
    console.log("esse é o novo service: ", newService);
    // atualiza o service com as novas propostas
    const updatedService = await updateServiceById(serviceId, newService);

    return updatedService;
  } catch (error) {
    console.log("Error when create the offer by passed service id", error);

    return Promise.reject(error);
  }
};
