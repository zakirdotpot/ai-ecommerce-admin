import axios from "axios";
import { baseUrl } from "../utils/key";

axios.defaults.withCredentials = true;
// for log in
export const adminlogin = async (admin) =>
  await axios.post("http://162.0.231.248:4040/api/auth/login", admin, {
    withCredentials: true,
  });

//users
export const getAllUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/get-all-users`, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get user");
  }
};

//Employees
export const getAllEmployee = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/get-all-employees`, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get user");
  }
};

export const updateUserRole = async (info) => {
  try {
    const res = await axios.put(`${baseUrl}/api/update-role`, info, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get user");
  }
};

// user /employeer remove

export const userRemove = async (userId) => {
  try {
    const res = await axios.delete(`${baseUrl}/api/delete-user/${userId}`, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to remove user");
    }
  }
};
