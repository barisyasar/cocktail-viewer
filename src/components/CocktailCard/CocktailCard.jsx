// Cocktail Card
import KeywordList from "../KeywordList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BasketToggleButton from "../BasketToggleButton";
import CocktailCardBookMark from "./CocktailCardBookMark";

function CocktailCard({ cocktail }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex justify-between">
          {cocktail.name}
          <CocktailCardBookMark id={cocktail.id} />
        </CardTitle>
        <CardDescription>{cocktail.glass}</CardDescription>
      </CardHeader>

      <div>
        <CardContent className="max-w-3xl">
          <div className="mb-4">{cocktail.description}</div>
          <KeywordList keywords={cocktail.keywords} />
        </CardContent>

        <CardFooter className="text-orange-400">
          <BasketToggleButton cocktail={cocktail} />
        </CardFooter>
      </div>
    </Card>
  );
}

export default CocktailCard;
