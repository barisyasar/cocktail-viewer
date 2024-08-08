// Saved Cocktail List
import COCKTAILS from "../../cocktails.json";
import SavedCocktailCard from "../SavedCocktailCard";

function SavedCocktailList() {
  return (
    <div className="container my-3">
      {COCKTAILS.map((c) => (
        <SavedCocktailCard key={c.id} cocktail={c} />
      ))}
    </div>
  );
}

export default SavedCocktailList;
