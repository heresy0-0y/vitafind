import api from "./api-config";

export const addSupplementToVitamin = async (id, vitamin) => {
  const resp = await api.post(`/vitamins/new/supplements/${id}`, {
    vitamin: vitamin,
  });
  return resp.data;
};
