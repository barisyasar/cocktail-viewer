// Cocktail Card Bookmark
"use client";
import useZustand from "@/hooks/useZustand";
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";

function CocktailCardBookMark({ id }) {
  const { savedCocktails } = useZustand();
  const isSaved = savedCocktails.some((item) => item.id === id);

  return isSaved ? (
    <BookmarkFilledIcon className="size-6" />
  ) : (
    <BookmarkIcon className="size-6" />
  );
}

export default CocktailCardBookMark;
