import KeywordList from "../KeywordList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function CocktailCard({ cocktail }) {
  return (
    <Card className="cocktail-card">
      <CardHeader>
        <CardTitle>{cocktail.name}</CardTitle>
        <CardDescription>{cocktail.glass}</CardDescription>
      </CardHeader>
      <CardContent className="max-w-3xl">
        <p className="mb-4">{cocktail.description}</p>
        <KeywordList keywords={cocktail.keywords} />
      </CardContent>
      <CardFooter className="gap-5 lg:flex lg:flex-col lg:gap-3 lg:m-6">
        {/* <cocktailDetailDialog cocktail={cocktail} /> */}
      </CardFooter>
    </Card>
  );
}

export default CocktailCard;
