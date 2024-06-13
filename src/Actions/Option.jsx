import axios from "axios";
import { baseUrl } from "../utils/key";


axios.defaults.withCredentials = true;

export const optionGet = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/option`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.masage || "Failed to get option");
  }
};

export const productTypeAdd = async (data) =>
  await axios.post(`${baseUrl}/api/option/type/create`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

export const CategoryAdd = async (type) =>
  await axios.post(`${baseUrl}/api/option/category/create`, type, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
