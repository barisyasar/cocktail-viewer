import CocktailList from "@/components/CocktailList";
import SavedCocktails from "@/components/SavedCocktails";
import SearchBar from "@/components/SearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Cocktails() {
  return (
    <main>
      <div className="flex">
        <section className="w-2/3">
          <div className="container">
            <div className="flex gap-3 my-3 items-center">
              <div className="text-sm hidden sm:block">Basic Search</div>
              <div className="w-[180px]">
                <SearchBar />
              </div>
            </div>
          </div>
          <Separator />
          <ScrollArea className="h-[calc(100vh-9rem)]">
            <div className="container my-5">
              <CocktailList />
            </div>
          </ScrollArea>
        </section>
        <Separator orientation="vertical" className="h-100" />

        <aside className="w-1/3">
          <section>
            <ScrollArea className="h-[calc(100vh-6rem)]">
              <SavedCocktails />
            </ScrollArea>
          </section>
        </aside>
      </div>
    </main>
  );
}
