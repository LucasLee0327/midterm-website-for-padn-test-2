import api from "./axiosClient";

export const user = {
  async getAll() {
    const { data } = await api.get("/users");
    return data;
  },
  async createOne({ username, password, avatar }) {
    const { data } = await api.post("/users", { username, password, avatar });
    return data;
  },
  async getOne( { username } ) {
    const { data } = await api.get(`/users/${username}`);
    return data;
  },
  async uploadImage({ username, avatar }){
    const { data } = await api.post(`/users/${username}`, { avatar });
    return data;
  }
};
