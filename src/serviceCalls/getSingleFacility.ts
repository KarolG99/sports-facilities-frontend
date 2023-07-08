import { API_GET_SINGLE_FACILITY } from "../config/servicesConfig";

export const getSingleFacility = async (id: string) => {
  const apiUrl = API_GET_SINGLE_FACILITY + id;

  const response = await fetch(apiUrl);
  return response.json();
};
