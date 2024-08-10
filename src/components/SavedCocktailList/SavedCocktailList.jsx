// Saved Cocktail List
"use client";
import useZustand from "@/hooks/useZustand";
import SavedCocktailCard from "../SavedCocktailCard";

function SavedCocktailList() {
  const { savedCocktails } = useZustand();

  return (
    <div className="cocktail-list">
      {savedCocktails.map((c) => (
        <SavedCocktailCard key={c.id} cocktail={c} />
      ))}
    </div>
  );
}

export default SavedCocktailList;
