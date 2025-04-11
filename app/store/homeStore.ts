import { create } from "zustand";

import { homeAPI } from "~/services/homeAPI";
import type { ICatImage } from "~/types/gobal";

type IHomeStore = {
  data: ICatImage[] | null;
  getHomeAll: () => Promise<ICatImage[]>;
};
export const useHomeStore = create<IHomeStore>((set) => ({
  data: null,

  getHomeAll: async (): Promise<ICatImage[]> => {
    try {
      const response = await homeAPI.getHomeAPI();
      set({ data: response });
      return response;
    } catch (error) {
      console.error("Failed to fetch HomeStore by id:", error);
      throw error;
    }
  },
}));
