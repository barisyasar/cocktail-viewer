// Cocktail List
import CocktailCard from "../CocktailCard";
import { ScrollArea } from "../ui/scroll-area";

function CocktailList({ filteredCocktails }) {
  return (
    <section>
      <ScrollArea className="h-[calc(100dvh-9rem)]">
        <div className="cocktail-list">
          {filteredCocktails.map((c) => (
            <CocktailCard key={c.id} cocktail={c} />
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}

export default CocktailList;
