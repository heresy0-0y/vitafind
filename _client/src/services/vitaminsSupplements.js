import api from "./api-config";

export const addSupplementToVitamin = async (id, vitamin_id) => {
  const resp = await api.post(`/vitamins/${vitamin_id}/supplements/${id}`);
  return resp.data;
};
