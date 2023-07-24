import { API_CREATE_FACILITY } from "../config/servicesConfig";

interface FacilityInterface {
  city: string;
  ZIPCode: string;
  address: string;
  purpose: string;
  email?: string;
  password?: string;
  description: string;
  isOccupied?: boolean;
  occupiedTime?: Date | null;
  googlePlusCode?: string;
  coordinates?: {
    latitude: Number | null | string;
    longitude: Number | null | string;
  };
  active?: boolean;
  _id?: string;
  __v?: number;
}

export const createFacility = async (values: FacilityInterface) => {
  const apiUrl = API_CREATE_FACILITY;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });
  return response.json();
};
