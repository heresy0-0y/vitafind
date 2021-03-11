import api from "./api-config";

export const getSupplements = async () => {
  const resp = await api.get("/supplements");
  return resp.data;
};

export const getSupplement = async (id) => {
  const resp = await api.get(`/supplements/${id}`);
  return resp.data;
};

export const postSupplement = async (supplementData) => {
  const resp = await api.post("/supplements", { supplement: supplementData });
  return resp.data;
};

export const putSupplement = async (id, supplementData) => {
  const resp = await api.put(`/supplements/${id}`, {
    supplement: supplementData,
  });
  return resp.data;
};

export const destroySupplement = async (id) => {
  const resp = await api.delete(`/supplements/${id}`);
  return resp;
};
