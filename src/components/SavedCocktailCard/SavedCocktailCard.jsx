import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function SavedCocktailCard({ cocktail }) {
  return (
    <Card className="saved-cocktail-card">
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          <div>{cocktail.name}</div>
          <BookmarkFilledIcon />
        </CardTitle>
        <CardDescription className="mt-3">
          <div className="font-semibold mb-1.5">{cocktail.glass}</div>
          <div className="font-light">{cocktail.description}</div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default SavedCocktailCard;
