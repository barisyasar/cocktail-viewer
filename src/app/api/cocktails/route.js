// GET - Cocktails Route
import { NextResponse } from "next/server";

export async function GET() {
  const cocktails = [
    {
      id: 1,
      name: "Margarita",
      keywords: ["Tequila", "Lime Juice", "Triple Sec", "Salt"],
      description:
        "A classic cocktail with a perfect balance of tequila, lime, and orange liqueur, served with a salted rim.",
      glass: "Cocktail Glass",
    },
    {
      id: 2,
      name: "Mojito",
      keywords: ["White Rum", "Sugar", "Lime Juice", "Soda Water", "Mint"],
      description:
        "A refreshing cocktail made with white rum, fresh lime juice, mint, and a touch of sweetness, topped with soda water.",
      glass: "Highball Glass",
    },
    {
      id: 3,
      name: "Piña Colada",
      keywords: ["White Rum", "Coconut Cream", "Pineapple Juice"],
      description:
        "A tropical delight blending white rum, creamy coconut, and sweet pineapple, served blended or shaken.",
      glass: "Hurricane Glass",
    },
    {
      id: 4,
      name: "Old Fashioned",
      keywords: [
        "Bourbon or Rye Whiskey",
        "Sugar",
        "Angostura Bitters",
        "Orange Peel",
      ],
      description:
        "A timeless cocktail made with whiskey, bitters, sugar, and a twist of citrus, stirred to perfection.",
      glass: "Old-Fashioned Glass",
    },
    {
      id: 5,
      name: "Martini",
      keywords: ["Gin", "Dry Vermouth", "Olive or Lemon Twist"],
      description:
        "An iconic cocktail with a smooth blend of gin and vermouth, garnished with an olive or a twist of lemon.",
      glass: "Martini Glass",
    },
    {
      id: 6,
      name: "Cosmopolitan",
      keywords: ["Vodka", "Triple Sec", "Cranberry Juice", "Lime Juice"],
      description:
        "A chic cocktail combining vodka, orange liqueur, tart cranberry, and lime, served in a stylish martini glass.",
      glass: "Martini Glass",
    },
    {
      id: 7,
      name: "Negroni",
      keywords: ["Gin", "Campari", "Sweet Vermouth"],
      description:
        "A bold and bitter Italian cocktail made with equal parts gin, Campari, and sweet vermouth, stirred and garnished with an orange peel.",
      glass: "Old-Fashioned Glass",
    },
    {
      id: 8,
      name: "Daiquiri",
      keywords: ["White Rum", "Lime Juice", "Simple Syrup"],
      description:
        "A simple yet elegant cocktail combining white rum, fresh lime juice, and a touch of sweetness.",
      glass: "Cocktail Glass",
    },
    {
      id: 9,
      name: "Whiskey Sour",
      keywords: ["Bourbon", "Lemon Juice", "Simple Syrup", "Egg White"],
      description:
        "A classic sour cocktail with bourbon, lemon juice, and simple syrup, often shaken with egg white for a frothy finish.",
      glass: "Old-Fashioned Glass",
    },
    {
      id: 10,
      name: "Bloody Mary",
      keywords: [
        "Vodka",
        "Tomato Juice",
        "Lemon Juice",
        "Worcestershire Sauce",
        "Hot Sauce",
        "Celery",
      ],
      description:
        "A savory cocktail with vodka, tomato juice, and a mix of spices, garnished with celery and a lemon wedge.",
      glass: "Highball Glass",
    },
  ];

  return NextResponse.json(cocktails);
}
