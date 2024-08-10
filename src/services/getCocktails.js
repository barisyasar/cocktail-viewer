// getCocktails
export default async function getCocktails() {
  return null;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cocktails`);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Failed to fetch cocktails: ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error("Failed to parse JSON response");
  }
}
