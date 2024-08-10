// Basket List
"use client";
import useZustand from "@/hooks/useZustand";
import BasketCard from "../BasketCard";
import { ScrollArea } from "../ui/scroll-area";

function BasketList() {
  const { basket } = useZustand();
  return (
    <ScrollArea className="h-[calc(100dvh-8rem)]">
      <div className="md:container mb-3 grid grid-cols-1 gap-5">
        {basket.map((c) => (
          <BasketCard key={c.id} cocktail={c} />
        ))}
      </div>
    </ScrollArea>
  );
}

export default BasketList;
