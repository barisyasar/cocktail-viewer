import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DeleteSavedButton from "../DeleteSavedButton";

function SavedCocktailCard({ cocktail }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          {cocktail.name}
          <BookmarkFilledIcon className="size-6" />
        </CardTitle>
        <CardDescription className="font-semibold mb-1.5 mt-3">
          {cocktail.glass}
        </CardDescription>
      </CardHeader>

      <CardContent>{cocktail.description}</CardContent>
      <CardFooter>
        <DeleteSavedButton id={cocktail.id} />
      </CardFooter>
    </Card>
  );
}

export default SavedCocktailCard;
