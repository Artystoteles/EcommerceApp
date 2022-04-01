import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmM4ZjMwZTI4MDBhYmE2Zjk1OTM5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU1NDkyMywiZXhwIjoxNjQ4ODE0MTIzfQ.EnHPLFBm0LdLbnQ9I12hXsniQK-XiAOEJMJ3j15Wzew";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
