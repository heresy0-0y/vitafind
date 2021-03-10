import api from "./api-config";

export const getBrands = async () => {
  const resp = await api.get("/brands");
  return resp.data;
};
