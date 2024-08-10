// Basket
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import BasketList from "../BasketList";
import BasketCount from "./BasketCount";
import { Separator } from "../ui/separator";

function Basket() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          Basket <Separator orientation="vertical" className="h-6 mx-2" />
          <BasketCount />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[600px] max-w-full">
        <SheetHeader className="mb-5">
          <SheetTitle className="flex gap-2">
            Basket <Separator orientation="vertical" className="h-6" />
            <BasketCount />
          </SheetTitle>
          <SheetDescription>
            Save the cocktails for later. The basket will be refreshed when the
            page reloads.
          </SheetDescription>
        </SheetHeader>
        <BasketList />
      </SheetContent>
    </Sheet>
  );
}

export default Basket;
