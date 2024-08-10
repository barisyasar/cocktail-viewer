// Basket Toggle Button
"use client";
import useZustand from "@/hooks/useZustand";
import BasketDialog from "../BasketDialog";

function BasketToggleButton({ cocktail }) {
  const { savedCocktails } = useZustand();

  const isSaved = savedCocktails.some((item) => item.id === cocktail.id);

  return (
    <div>
      {isSaved ? (
        "Already saved. Can't add to basket."
      ) : (
        <BasketDialog cocktail={cocktail} />
      )}
    </div>
  );
}

export default BasketToggleButton;
