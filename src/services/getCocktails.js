// getCocktails
export default async function getCocktails() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cocktails`);
  if (!res.ok) {
    throw new Error(`Failed to fetch cocktails: ${text}`);
  }
  return res.json();
}
