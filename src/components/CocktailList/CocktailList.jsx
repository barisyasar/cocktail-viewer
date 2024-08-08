// Cocktail List
import COCKTAILS from "../../cocktails";
import CocktailCard from "../CocktailCard";

function CocktailList() {
  return (
    <div>
      {COCKTAILS.map((c) => (
        <CocktailCard key={c.id} cocktail={c} />
      ))}
    </div>
  );
}

export default CocktailList;
