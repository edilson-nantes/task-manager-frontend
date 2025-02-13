
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export async function loginService(email: string, password: string) {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });
    return response.data.accessToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function registerService(name: string, email: string, password: string) {
  try {
    const response = await api.post("/users/register", {
      name,
      email,
      password,
    });
    return response.data.accessToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
}