// Basket Count
"use client";
import useZustand from "@/hooks/useZustand";

function BasketCount() {
  const { basket } = useZustand();
  return <>{basket.length}</>;
}

export default BasketCount;
