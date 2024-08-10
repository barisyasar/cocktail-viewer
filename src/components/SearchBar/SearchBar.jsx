"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

function SearchBar({ cocktails, setFilteredCocktails }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const lowercasedQuery = query.toLowerCase();
    const newFilteredCocktails = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCocktails(newFilteredCocktails);
  }, [query, cocktails]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Input type="text" placeholder="Search by name" onChange={handleChange} />
  );
}

export default SearchBar;
