import axios from "axios";

//connexion to the db
const api = axios.create({
  baseURL: `http://localhost:4000/api`,
});
// api.interceptors.request.use(
//   (confing) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       confing.headers.Authorization = "Bearer " + token;
//     }
//     return confing;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
export default api;
