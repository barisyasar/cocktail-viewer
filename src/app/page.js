import Cocktails from "@/components/Cocktails";
import getCocktails from "@/services/getCocktails";

export default async function Home() {
  const cocktails = await getCocktails();

  return (
    <main>
      <Cocktails cocktails={cocktails} />
    </main>
  );
}
