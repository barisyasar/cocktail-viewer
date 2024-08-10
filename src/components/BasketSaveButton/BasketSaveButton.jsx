// Basket Save Button
"use client";
import useZustand from "@/hooks/useZustand";
import { Button } from "../ui/button";

function BasketSaveButton({ id }) {
  const { addSaved, removeBasket, basket } = useZustand();

  const handleSave = () => {
    const item = basket.find((c) => c.id === id);
    if (item) {
      addSaved(item);
      removeBasket(id);
    }
  };

  return (
    <Button onClick={handleSave} disabled={!basket.some((c) => c.id === id)}>
      Add to Saved
    </Button>
  );
}

export default BasketSaveButton;
