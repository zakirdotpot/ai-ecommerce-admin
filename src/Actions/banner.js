import axios from "axios";
import { baseUrl } from "../utils/key";

//banner add
export const bannerAdd = async (formData, token) =>
  await axios.post(`${baseUrl}/api/banner/admin/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

export const bannerGet = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/api/banner/admin/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data; // Return the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get banners");
  }
};

export const bannerRemove = async (bannerId) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/api/banner/admin/delete/${bannerId}`,
      {
        withCredentials: true,
      }
    );
    return res; // Return the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get banners");
  }
};
