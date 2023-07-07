import { API_GET_ALL_FACILITIES } from "../config/servicesConfig";

export const getAllFacilities = async () => {
  const apiUrl = API_GET_ALL_FACILITIES;

  const response = await fetch(apiUrl);
  return response.json();
};
