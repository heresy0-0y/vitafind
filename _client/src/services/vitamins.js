import api from "./api-config";

export const getVitamins = async () => {
  const resp = await api.get("/vitamins");
  return resp.data;
};
