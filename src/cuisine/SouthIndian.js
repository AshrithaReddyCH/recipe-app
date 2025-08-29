import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./cuisine.css";

export const southIndianRecipes = [
  {
    name: "Masala Dosa",
    category: "south-indian",
    img: "https://i.pinimg.com/736x/6e/10/c7/6e10c7c0c11d6e2a28d6c51c3877774a.jpg",
    ingredients: [
      "2 cups rice",
      "½ cup urad dal (split black gram)",
      "2 tbsp chana dal (optional)",
      "½ tsp fenugreek seeds",
      "Salt, to taste",
      "Water (for soaking & grinding)",
      "Oil or ghee for cooking",
      "3–4 medium potatoes (boiled & mashed)",
      "1 large onion (sliced)",
      "2 green chilies (chopped)",
      "1 inch ginger (grated)",
      "8–10 curry leaves",
      "½ tsp mustard seeds",
      "½ tsp turmeric powder",
      "1 tbsp oil",
      "Fresh coriander leaves (chopped, for garnish)"
    ],
    instructions: [
      "Wash rice, urad dal, chana dal, and fenugreek seeds. Soak 6–8 hours.",
      "Grind into smooth batter, add salt, ferment overnight 8–12 hours.",
      "Heat oil, add mustard seeds, curry leaves, ginger, chilies. Sauté briefly.",
      "Add onions, sauté until translucent. Add turmeric & salt.",
      "Add boiled mashed potatoes, combine, garnish with coriander. Set aside.",
      "Heat dosa pan, pour ladle of batter, spread thin, drizzle oil/ghee.",
      "Cook until crisp. Place potato masala on one side, fold and serve hot."
    ]
  },
  {
    name: "Idli",
    category: "south-indian",
    img: "https://i.pinimg.com/736x/06/d3/0d/06d30da0f40806b6cd07b51cb16fdf0d.jpg",
    ingredients: [
      "2 cups idli rice (or parboiled rice)",
      "1 cup urad dal (split black gram)",
      "½ tsp fenugreek seeds (optional)",
      "Salt, to taste",
      "A few drops of oil for greasing molds"
    ],
    instructions: [
      "Wash and soak rice, urad dal, fenugreek seeds separately 6–8 hours.",
      "Grind urad dal with water until smooth and fluffy. Grind rice slightly coarse.",
      "Mix both, add salt, cover and ferment overnight 8–12 hours.",
      "Grease idli molds, pour batter ¾ full.",
      "Steam in idli steamer or pressure cooker (no whistle) 10–12 mins.",
      "Check with toothpick; should come out clean. Remove and serve hot with coconut chutney and sambar."
    ]
  },
  {
    name: "Chicken Biryani",
    category: "south-indian",
    img: "https://i.pinimg.com/1200x/a8/2c/0d/a82c0dd88f2a7bc31bf73b03ff5f2190.jpg",
    ingredients: [
      "500g chicken pieces (bone-in or boneless)",
      "½ cup yogurt",
      "1 tsp ginger-garlic paste",
      "1 tsp red chili powder",
      "½ tsp turmeric powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 cups Basmati rice",
      "4 cups water",
      "2–3 cloves",
      "2–3 cardamom pods",
      "1 small cinnamon stick",
      "1 bay leaf",
      "Salt to taste",
      "2 large onions, thinly sliced",
      "2 tomatoes, chopped",
      "2 tbsp ghee or oil",
      "1 tsp cumin seeds",
      "8–10 curry leaves (optional)",
      "1 tsp garam masala",
      "Fresh coriander and mint leaves, chopped",
      "Saffron strands soaked in 2 tbsp warm milk (optional)"
    ],
    instructions: [
      "Mix chicken with yogurt, ginger-garlic paste, red chili, turmeric, garam masala, and salt. Refrigerate at least 1 hour (or overnight).",
      "Rinse Basmati rice until water runs clear. Boil water with cloves, cardamom, cinnamon, bay leaf, and salt. Add rice and cook until 70% done. Drain and set aside.",
      "Heat ghee or oil in a pan. Fry sliced onions until golden (reserve some for garnish). Add cumin seeds, curry leaves, chopped tomatoes, and marinated chicken. Cook until chicken is tender and oil separates.",
      "In a heavy-bottomed pot, layer half the chicken, then half the rice. Sprinkle fried onions, garam masala, coriander, mint, and saffron milk. Repeat with remaining chicken and rice, topping with remaining garnishes.",
      "Cover tightly with a lid or foil. Cook on low heat for 20–25 minutes (or use indirect heat).",
      "Gently fluff the rice and serve hot with raita or salad."
    ]
  },
  {
    name: "Vada",
    category: "south-indian",
    img: "https://i.pinimg.com/736x/34/a2/8c/34a28cbd784e4284d18c456a1aa43c27.jpg",
    ingredients: [
      "1 cup urad dal (split black gram)",
      "1 green chili (finely chopped)",
      "1 inch ginger (grated)",
      "2 tbsp onion (finely chopped, optional)",
      "1 tbsp curry leaves (chopped)",
      "1 tbsp coriander leaves (chopped)",
      "1 pinch hing (asafoetida)",
      "Salt to taste",
      "Oil (for deep frying)"
    ],
    instructions: [
      "Wash and soak urad dal for 4–6 hours.",
      "Drain completely and grind into a smooth, thick batter (add very little water).",
      "Whisk batter well until light and fluffy.",
      "Mix in green chili, ginger, onion, curry leaves, coriander, hing, and salt.",
      "Wet your hands with water, take a portion of batter, shape into a ball, press slightly flat.",
      "Make a small hole in the center with your thumb.",
      "Heat oil in a deep pan and slide vadas gently into hot oil.",
      "Fry on medium flame until golden and crispy on both sides.",
      "Drain excess oil on paper towels and serve hot with coconut chutney and sambar."
    ]
  },
  {
    name: "Uttapam",
    category: "south-indian",
    img: "https://i.pinimg.com/1200x/00/d4/85/00d48595bec455a80aa0b1d51666b96d.jpg",
    ingredients: [
      "1 cup idli rice (or parboiled rice)",
      "½ cup urad dal (split black gram)",
      "½ tsp fenugreek seeds (optional)",
      "Salt to taste",
      "Water (for grinding)",
      "1 small onion (finely chopped)",
      "1 small tomato (finely chopped)",
      "1 green chili (finely chopped)",
      "2–3 curry leaves (chopped)",
      "2–3 tbsp coriander leaves (chopped)",
      "Optional: grated carrot, capsicum, or bell peppers",
      "Oil or ghee"
    ],
    instructions: [
      "Wash and soak rice, urad dal, and fenugreek seeds separately for 6–8 hours.",
      "Grind urad dal to a smooth, fluffy batter; grind rice to a slightly coarse paste.",
      "Mix both batters, add salt, and let ferment overnight 8–12 hours until airy.",
      "Chop vegetables and mix as desired.",
      "Heat a non-stick pan on medium heat. Pour a ladle of batter, spread into a thick circle (1 cm).",
      "Sprinkle chopped vegetables evenly on top.",
      "Drizzle oil/ghee around edges. Cover and cook 2–3 minutes until bottom golden.",
      "Flip carefully, cook other side 2–3 minutes. Serve hot with coconut chutney and sambar."
    ]
  },
  {
    name: "Sambar",
    category: "south-indian",
    img: "https://i.pinimg.com/736x/c5/61/b2/c561b21330eae62064323e97d2f0c8a1.jpg",
    ingredients: [
      "1 cup toor dal (pigeon peas)",
      "2–3 cups water",
      "¼ tsp turmeric powder",
      "Salt to taste",
      "1 small carrot, chopped",
      "½ cup drumstick (optional), cut into pieces",
      "½ cup pumpkin, chopped",
      "½ cup beans, chopped",
      "1 small tomato, chopped",
      "1 small onion, chopped",
      "2 tbsp tamarind paste",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "1–2 dried red chilies",
      "1 pinch hing (asafoetida)",
      "8–10 curry leaves",
      "2 tbsp sambar powder"
    ],
    instructions: [
      "Rinse toor dal and cook with turmeric and water until soft. Mash lightly.",
      "Soak tamarind in warm water 10 mins, extract pulp.",
      "In a pot, add chopped vegetables, tamarind water, salt, and a little water. Cook until tender.",
      "Add cooked dal to vegetables. Stir in sambar powder and simmer 5–10 mins.",
      "Heat oil in a small pan, add mustard seeds, cumin seeds, dried red chilies, curry leaves, and hing. Pour tempering over simmering sambar.",
      "Serve hot with idli, dosa, vada, or uttapam. Garnish with coriander leaves."
    ]
  }
];

function SouthIndian() {
  const { recipeId } = useParams();
  const [activeTab, setActiveTab] = useState("ingredients");

  const selectedRecipe = recipeId
    ? southIndianRecipes.find(
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
            <img src={selectedRecipe.img || ""} alt={selectedRecipe.name || "Recipe"} />
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
      <h2>South Indian Recipes</h2>
      <div className="recipe-list">
        {southIndianRecipes.map(r => (
          <div key={r.name || Math.random()} className="sample-card">
            <Link to={`/south-indian/${(r.name || "").toLowerCase().replace(/\s/g, "-")}`}>
              <h3>{r.name || "Unnamed Recipe"}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SouthIndian;
