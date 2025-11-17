import api from "./api";

// GET
export const getData = (endpoint, headers = {}) =>
  api.get(endpoint, { headers });

// POST
export const postData = (endpoint, payload, headers = {}) =>
  api.post(endpoint, payload, { headers });

// PATCH
export const patchData = (endpoint, payload, headers = {}) =>
  api.patch(endpoint, payload, { headers });

// DELETE
export const deleteData = (endpoint, headers = {}) =>
  api.delete(endpoint, { headers });
