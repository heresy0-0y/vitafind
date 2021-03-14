import api from "./api-config";

export const getVitamins = async () => {
  const resp = await api.get("/vitamins");
  return resp.data;
};

export const postVitamin = async (vitaminData) => {
  const resp = await api.post("/vitamins", { vitamin: vitaminData})
  return resp.data 
}