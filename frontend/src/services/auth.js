import api from "./axiosClient";

export const auth = {
  async login({username, password}) {
    const { data: { isLoggedIn } } = await api.post("/login", { username, password });
    return { isLoggedIn };
  },
  async logout() {
    console.log('auth')
    await api.get("/login");
    return { isLoggedIn: false };
  },
  async getCsrf() {
    const {
      data: { csrfToken },
    } = await api.get("/csrf-token");
    return { csrfToken };
  }
};
