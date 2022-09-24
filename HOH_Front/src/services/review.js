import api from "./api";

//
const token = localStorage.getItem("token");

//
const config = { headers: { Authorization: `${token}` } };

const reviewService = {
  //Visitor
  testimony: async (last_name, first_name, opinion, role) => {
    const review = { last_name, first_name, opinion, role };

    return await api.post("/votrePetitMot", review);
  },
  //Admin
  allTestimony: async () => {
    return await api.get("/votrePetitMot", config);
  },
  getOneTestimony: async (testimonyId) => {
    const id = testimonyId;

    return await api.get(`/votrePetitMot/${id}`, config)
  },
  deleteOneTestimony: async (testimonyId) => {
    const id = testimonyId;

    return await api.delete(`/votrePetitMot/${id}`, config);
  },
};

export default reviewService;
