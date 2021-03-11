import api from "./api-config";

export const addSupplementToVitamin = async (supplementId) => {
  const resp = await api.post(`/vitamins/new/supplements/${supplementId}`);
  return resp.data;
};
