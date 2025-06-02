import axios from "axios";

// Create a single axios instance for all API calls
const api = axios.create({
  baseURL: "http://127.0.0.1:6543/api", // Ensure this matches your backend
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

/**
 * MENU ENDPOINTS
 */
export const menuApi = {
  fetchAll: async () => {
    try {
      const response = await api.get("/menus");
      return response.data;
    } catch (error) {
      console.error("Error fetching menus:", error);
      throw error;
    }
  },

  create: async (menuData) => {
    try {
      const response = await api.post("/menus", {
        name: menuData.name,
        price: Number(menuData.price),
        category: menuData.category || "minuman",
        available: Boolean(menuData.available),
        description: menuData.description || "",
      });
      return response.data;
    } catch (error) {
      console.error("Error creating menu:", error);
      throw error;
    }
  },

  update: async (id, menuData) => {
    try {
      const response = await api.put(`/menus/${id}`, {
        name: menuData.name,
        price: Number(menuData.price),
        category: menuData.category,
        available: Boolean(menuData.available),
        description: menuData.description,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating menu:", error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/menus/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting menu:", error);
      throw error;
    }
  },
};

/**
 * CUSTOMER ENDPOINTS
 */
export const customerApi = {
  fetchAll: async () => {
    try {
      const response = await api.get("/customers");
      return response.data;
    } catch (error) {
      console.error("Error fetching customers:", error);
      throw error;
    }
  },

  create: async (customerData) => {
    try {
      const response = await api.post("/customers", {
        name: customerData.name,
        phone: customerData.phone,
        email: customerData.email,
        points: Number(customerData.points) || 0,
        address: customerData.address || "",
      });
      return response.data;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw error;
    }
  },

  update: async (id, customerData) => {
    try {
      const response = await api.put(`/customers/${id}`, {
        name: customerData.name,
        phone: customerData.phone,
        email: customerData.email,
        points: Number(customerData.points) || 0,
        address: customerData.address || "",
      });
      return response.data;
    } catch (error) {
      console.error("Error updating customer:", error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/customers/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting customer:", error);
      throw error;
    }
  },
};

// Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", {
        status: error.response.status,
        data: error.response.data,
        url: error.config.url,
        method: error.config.method,
      });
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
