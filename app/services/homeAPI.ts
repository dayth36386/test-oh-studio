import axiosInstance from "./axiosInstance";

import type { ICatImage } from "~/types/gobal";

export const homeAPI = {
  getHomeAPI: async (): Promise<ICatImage[]> => {
    try {
      const response = await axiosInstance.get("/v1/images/search?limit=10");
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
