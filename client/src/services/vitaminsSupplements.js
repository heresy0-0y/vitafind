import api from "./api-config";

export const addSupplementToVitamin = async (vitaminId, supplementId) => {
  const resp = await api.post(
    `/vitamins/${vitaminId}/supplements/${supplementId}`
  );
  return resp.data;
};
