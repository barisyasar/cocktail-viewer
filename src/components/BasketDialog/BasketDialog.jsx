// Basket Dialog
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useZustand from "@/hooks/useZustand";
import { Button } from "../ui/button";

function BasketDialog({ cocktail }) {
  const { addBasket, removeBasket, basket } = useZustand();
  const isInBasket = basket.some((item) => item.id === cocktail.id);

  const handleToggle = () => {
    if (isInBasket) {
      removeBasket(cocktail.id);
    } else {
      addBasket(cocktail);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={isInBasket ? "destructive" : ""}>
          {isInBasket ? "Remove from Basket" : "Add To Basket"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You are {isInBasket ? "removing" : "adding"} {cocktail.name}{" "}
            {isInBasket ? "from" : "to"} the basket.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleToggle}>
            {isInBasket ? "Remove" : "Add"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default BasketDialog;
