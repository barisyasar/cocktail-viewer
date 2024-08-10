// Cocktails
"use client";
import { useState } from "react";
import { Separator } from "../ui/separator";
import CocktailList from "../CocktailList";
import SearchBar from "../SearchBar";

function Cocktails({ cocktails }) {
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);

  return (
    <>
      <section className="container">
        <div className="flex my-3 items-center gap-3">
          <div className="text-sm hidden sm:block">Basic Search</div>
          <div className="w-[180px]">
            <SearchBar
              cocktails={cocktails}
              setFilteredCocktails={setFilteredCocktails}
            />
          </div>
        </div>
      </section>
      <Separator />
      <CocktailList filteredCocktails={filteredCocktails} />
    </>
  );
}

export default Cocktails;
