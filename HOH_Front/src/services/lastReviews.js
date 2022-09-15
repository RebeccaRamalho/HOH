import api from "./api";

const lastReviews = {
  getLastReviews: async () => {
    return await api.get("/derniersPetitMots");
  },
};
export default lastReviews;
