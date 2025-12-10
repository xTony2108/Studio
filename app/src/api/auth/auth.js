import { fetchData } from "../fetchData";

export const loginApi = (credentials) =>
  fetchData("/api/users/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const registerApi = (credentials) =>
  fetchData("/api/users/register", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
