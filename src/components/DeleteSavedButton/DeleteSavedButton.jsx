"use client";
import { Button } from "../ui/button";
import useZustand from "@/hooks/useZustand";

function DeleteSavedButton({ id }) {
  const { removeSaved } = useZustand();

  const handleDelete = () => {
    removeSaved(id);
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete from Saved
    </Button>
  );
}

export default DeleteSavedButton;
