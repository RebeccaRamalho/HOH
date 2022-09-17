import api from "./api";
const userService = {
  signin: async (email, user_name, password) => {
    const user = { email, user_name, password };
    console.log("user",user)
    return api.post("/adminlogin", user);
  },
};

export default userService;
