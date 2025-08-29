// src/pages/Thai.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./cuisine.css";

export const thaiRecipes = [
  {
    name: "Pad Thai",
    category: "thai",
    img: "https://i.pinimg.com/1200x/6a/07/1a/6a071ab6a628d73eb3fb4d3db83be920.jpg",
    ingredients: [
      "150g rice noodles",
      "150g shrimp, chicken, or tofu (optional)",
      "2 eggs",
      "2–3 cloves garlic, minced",
      "2–3 spring onions, chopped",
      "¼ cup bean sprouts",
      "3 tbsp tamarind paste",
      "2 tbsp fish sauce (or soy sauce for vegetarian)",
      "1–2 tbsp palm sugar (or brown sugar)",
      "1 tbsp lime juice",
      "1 tsp chili flakes (optional)",
      "Crushed peanuts for garnish",
      "Lime wedges for garnish",
      "Fresh coriander (optional)"
    ],
    instructions: [
      "Soak rice noodles in warm water for 20–30 minutes until soft. Drain.",
      "Mix tamarind paste, fish sauce, sugar, lime juice, and chili flakes to make the sauce.",
      "Heat 1–2 tbsp oil in a wok/pan. Sauté garlic.",
      "Add shrimp/chicken/tofu, cook until done. Push to side and scramble eggs.",
      "Add noodles and sauce, toss well. Add spring onions and bean sprouts, stir-fry 1–2 mins.",
      "Plate and garnish with crushed peanuts, lime wedges, and coriander."
    ]
  },
  {
    name: "Green Curry",
    category: "thai",
    img: "https://i.pinimg.com/736x/66/56/9f/66569fcea00a7afb15a346a6bd98d4c9.jpg",
    ingredients: [
      "400ml coconut milk",
      "2–3 tbsp green curry paste",
      "200g chicken, thinly sliced (or tofu/vegetables)",
      "1 cup mixed vegetables (bell peppers, zucchini, eggplant, bamboo shoots)",
      "1 tbsp fish sauce (or soy sauce for vegetarian)",
      "1 tsp sugar",
      "2–3 kaffir lime leaves (optional)",
      "1 tsp oil",
      "Fresh Thai basil leaves",
      "Red chili slices (optional)",
      "Steamed jasmine rice to serve"
    ],
    instructions: [
      "Heat oil in a pan, sauté green curry paste 1–2 mins until fragrant.",
      "Add half coconut milk, stir to mix. Add chicken and cook until nearly done.",
      "Add mixed vegetables and remaining coconut milk. Stir in fish sauce, sugar, and kaffir lime leaves. Simmer 5–7 mins.",
      "Adjust seasoning. Garnish with Thai basil and chili slices. Serve with jasmine rice."
    ]
  },
  {
    name: "Tom Yum Soup",
    category: "thai",
    img: "https://i.pinimg.com/736x/05/29/b1/0529b19ea144e00f9ff9275bd8295586.jpg",
    ingredients: [
      "400ml chicken or vegetable stock",
      "150g shrimp (or chicken/tofu)",
      "2 stalks lemongrass, smashed",
      "3–4 kaffir lime leaves, torn",
      "3 slices galangal (or ginger)",
      "2–3 Thai chilies, crushed",
      "100g mushrooms, sliced",
      "2 tbsp fish sauce (or soy sauce for vegetarian)",
      "1–2 tbsp lime juice",
      "1 tsp sugar",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Bring stock to a boil. Add lemongrass, lime leaves, galangal, and chilies. Simmer 5 mins.",
      "Add shrimp (or chicken/tofu) and mushrooms, cook 3–5 mins until protein is cooked.",
      "Add fish sauce, lime juice, and sugar. Adjust taste.",
      "Remove aromatics before serving. Garnish with coriander. Serve hot."
    ]
  },
  {
    name: "Massaman Curry",
    category: "thai",
    img: "https://i.pinimg.com/1200x/a7/6a/14/a76a14394baff6b6002cafd5bc6ff82a.jpg",
    ingredients: [
      "400ml coconut milk",
      "2–3 tbsp Massaman curry paste",
      "200g chicken, beef, or tofu, cubed",
      "1 large potato, peeled and cubed",
      "1 small onion, chopped",
      "1/4 cup roasted peanuts or cashews",
      "1 tbsp fish sauce (or soy sauce for vegetarian)",
      "1 tbsp tamarind paste",
      "1 tbsp sugar",
      "1 tsp oil",
      "Fresh coriander leaves",
      "Steamed jasmine rice to serve"
    ],
    instructions: [
      "Heat oil in a pan. Sauté Massaman curry paste 1–2 mins until fragrant.",
      "Add half coconut milk. Add protein and cook until nearly done.",
      "Add potato, onion, and nuts. Stir in remaining coconut milk, fish sauce, tamarind paste, and sugar.",
      "Simmer 15–20 mins until potatoes are tender and protein is cooked.",
      "Garnish with coriander. Serve with jasmine rice."
    ]
  },
{
  name: "Panang Curry",
  category: "thai",
  img: "https://i.pinimg.com/1200x/56/6e/b9/566eb9c052b02e7898a2686aaf5b3d82.jpg",
  ingredients: [
    "400ml coconut milk",
    "2–3 tbsp Panang curry paste",
    "200g chicken, beef, or tofu, sliced thinly",
    "1 small bell pepper, sliced",
    "1 small carrot, sliced thin",
    "1 tbsp fish sauce (or soy sauce for vegetarian)",
    "1 tsp sugar",
    "1–2 kaffir lime leaves, torn",
    "1 tsp oil",
    "Fresh Thai basil leaves for garnish",
    "Red chili slices for garnish (optional)"
  ],
  instructions: [
    "Heat oil in a pan or wok over medium heat.",
    "Add Panang curry paste and sauté for 1–2 minutes until fragrant.",
    "Pour in half the coconut milk and stir to combine with the curry paste.",
    "Add chicken, beef, or tofu and cook until nearly done.",
    "Add bell pepper, carrot, fish sauce, sugar, and torn kaffir lime leaves.",
    "Stir and simmer for 5–7 minutes until vegetables are tender and protein is cooked through.",
    "Taste and adjust seasoning if needed.",
    "Garnish with Thai basil leaves and red chili slices.",
    "Serve hot with steamed jasmine rice."
  ]
},
  {
  name: "Mango Sticky Rice",
  category: "thai",
  img: "https://i.pinimg.com/736x/80/ad/8b/80ad8bfff13645a22463db8ad8f29188.jpg",
  ingredients: [
    "1 cup glutinous (sticky) rice",
    "¾ cup coconut milk",
    "¼ cup sugar",
    "½ tsp salt",
    "1–2 ripe mangoes, peeled and sliced",
    "Toasted sesame seeds or mung beans for garnish (optional)"
  ],
  instructions: [
    "Rinse sticky rice until water runs clear. Soak rice for 2–3 hours or overnight.",
    "Steam rice for 20–25 minutes until soft and sticky.",
    "Heat coconut milk, sugar, and salt until sugar dissolves. Reserve 2–3 tbsp for drizzling.",
    "Pour most of the coconut sauce over hot sticky rice. Mix gently and let absorb for 10–15 minutes.",
    "Place sticky rice on a plate, arrange mango slices on top or beside it.",
    "Drizzle reserved coconut sauce over mango and rice. Sprinkle toasted sesame seeds or mung beans if desired."
  ]
}
];

function Thai() {
  const { recipeId } = useParams();
  const [activeTab, setActiveTab] = useState("ingredients");

  const selectedRecipe = recipeId
    ? thaiRecipes.find(
        r => r && r.name && r.name.toLowerCase().replace(/\s/g, "-") === recipeId
      )
    : null;

  useEffect(() => {
    if (selectedRecipe) window.scrollTo(0, 0);
  }, [selectedRecipe]);

  if (selectedRecipe) {
    return (
      <div className="cuisine-container">
        <h1>{selectedRecipe.name || "Recipe"}</h1>
        <div className="recipe-card">
          <div className="recipe-image">
            <img src={selectedRecipe.img} alt={selectedRecipe.name || "Recipe"} />
          </div>
          <div className="recipe-info">
            <div className="buttons">
              <button
                className={activeTab === "ingredients" ? "active" : ""}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
              <button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </button>
            </div>

            {activeTab === "ingredients" && selectedRecipe.ingredients && (
              <ul>
                {selectedRecipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {activeTab === "instructions" && selectedRecipe.instructions && (
              <ol>
                {selectedRecipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            )}

            <Link to="/" className="back-link">
              ← Back to all recipes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cuisine-container">
      <h2>Thai Recipes</h2>
      <div className="recipe-list">
        {thaiRecipes.map((r) => (
          <div key={r.name || Math.random()} className="sample-card">
            <Link to={`/thai/${(r.name || "").toLowerCase().replace(/\s/g, "-")}`}>
              <h3>{r.name || "Unnamed Recipe"}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thai;
