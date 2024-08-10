import { create } from "zustand";
import { persist } from "zustand/middleware";

const useZustand = create(
  persist(
    (set) => ({
      basket: [],
      addBasket: (item) =>
        set((state) => {
          const existingItem = state.basket.find((b) => b.id === item.id);
          if (existingItem) {
            return state;
          }
          return { basket: [...state.basket, item] };
        }),
      removeBasket: (id) =>
        set((state) => ({
          basket: state.basket.filter((item) => item.id !== id),
        })),

      savedCocktails: [],
      addSaved: (item) =>
        set((state) => {
          const existingItem = state.savedCocktails.find(
            (b) => b.id === item.id
          );
          if (existingItem) {
            return state;
          }
          return { savedCocktails: [...state.savedCocktails, item] };
        }),
      removeSaved: (id) =>
        set((state) => ({
          savedCocktails: state.savedCocktails.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "saved-cocktails",
      partialize: (state) => ({
        savedCocktails: state.savedCocktails,
      }),
    }
  )
);

export default useZustand;
