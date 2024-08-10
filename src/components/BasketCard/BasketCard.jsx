// Basket Card
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BasketSaveButton from "../BasketSaveButton";
import BasketDialog from "../BasketDialog";

function BasketCard({ cocktail }) {
  return (
    <Card className="cocktail-card">
      <CardHeader>
        <CardTitle>{cocktail.name}</CardTitle>
        <CardDescription className="font-semibold mb-1.5 mt-3">
          {cocktail.glass}
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-3">
        <BasketSaveButton id={cocktail.id} />
        <BasketDialog cocktail={cocktail} />
      </CardFooter>
    </Card>
  );
}

export default BasketCard;
