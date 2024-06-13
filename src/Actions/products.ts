import axios from "axios";
import { baseUrl } from "../utils/key";
axios.defaults.withCredentials = true;



//product upload
export const productAdd = async (formData,token) =>
  await axios.post(`${baseUrl}/api/product/admin/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    
  });


export const getAllProducts = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/api/product/admin/all`, {
      headers: {
      Authorization: `Bearer ${token}`,
    },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get Product");
  }
};


export const getProductById = async (pId,token) => {
  try {
    const res = await axios.get(`${baseUrl}/api/product/admin/${pId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.res?.data?.message || "Failed to get Product");
  }
};



export const deleteProductById = async (id,token) => {
  try {
    const res = await axios.delete(`${baseUrl}/api/product/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    throw new Error(error.res?.data?.message || "Failed to delete Product");
  }
};



//Discount Section


export const makeDiscount = async (info,token) => {
  try {
    const res = await axios.put(
      `${baseUrl}/api/product/admin/discount/create`,
      info,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add discount");
  }
};



export const discountEdit = async (info,token) => {
  try {
    const res = await axios.put(`${baseUrl}/api/product/admin/discount/edit`, info, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add discount");
  }
};



export const getDiscountedProducts = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/api/product/admin/flash-sale`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get Product");
  }
};



export const deleteDiscount = async (id,token) => {
  try {
    const res = await axios.put(
      `${baseUrl}/api/product/admin/discount/remove/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  } catch (error) {
    throw new Error(error.res?.error || "Failed to delete discount");
  }
};



//Feature Section

export const makeFeature = async (info,token) => {
  try {
    const res = await axios.put(`${baseUrl}/api/product/admin/featured/update`, info, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to make Feature product"
    );
  }
};


export const removeFeature = async (info,token) => {
  try {
    const res = await axios.put(
      `${baseUrl}/api/product/admin/featured/update`,
      info,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to make Feature product"
    );
  }
};


export const getAllFeatureProducts = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/api/product/admin/featured-products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get Feature Product"
    );
  }
};
