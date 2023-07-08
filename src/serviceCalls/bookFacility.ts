import { API_BOOK_FACILITY } from "../config/servicesConfig";

export const bookFacility = async (id: string, occupiedMinutes: number) => {
  const apiUrl = API_BOOK_FACILITY;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, occupiedMinutes }),
  });
  return response.json();
};
