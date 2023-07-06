export const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

// ENDPOINTS
export const API_GET_ALL_FACILITIES = `${API_BASE_URL}/api/facilities`;
export const API_GET_SINGLE_FACILITY = `${API_BASE_URL}/api/facilities/`; // + id
export const API_CREATE_FACILITY = `${API_BASE_URL}/api/facilities/create`;
export const API_DELETE_FACILITY = `${API_BASE_URL}/api/facilities/delete/`; // + id
export const API_BOOK_FACILITY = `${API_BASE_URL}/api/facilities/book`;
