import HomeHero from "@/components/HomeHero";
import HomeInformation from "@/components/HomeInformation";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <Separator />
      <HomeInformation />
    </main>
  );
}
