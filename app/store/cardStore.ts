import { create } from "zustand";

import type { IQuestion } from "~/types/gobal";

type ICardStore = {
  data: IQuestion;
  activeIndex: number;
  stateCards: "waiting" | "show" | "";
  setData: (data: IQuestion) => void;
  setActiveIndex: (index: number) => void;
  setCards: (cards: "waiting" | "show" | "") => void;
  nextCard: () => void;
  prevCard: () => void;
};

export const useCardStore = create<ICardStore>((set, get) => ({
  data: {
    role: "",
    companySize: "",
    about: ""
  },
  activeIndex: 0,
  stateCards: "",
  setData: (data: IQuestion) => set({ data }),
  setActiveIndex: (activeIndex: number) => set({ activeIndex }),
  setCards: (stateCards: "waiting" | "show" | "") => set({ stateCards }),
  nextCard: () => {
    const { activeIndex } = get();
    set({ activeIndex: activeIndex + 1 });
  },
  prevCard: () => {
    const { activeIndex } = get();
    set({ activeIndex: activeIndex - 1 });
  }
}));
