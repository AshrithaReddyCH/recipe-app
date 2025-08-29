import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./cuisine.css";

export const chineseRecipes = [
  {
    name: "Sweet & Sour Pork",
    category: "chinese",
    img: "https://i.pinimg.com/1200x/ab/99/7f/ab997f09f39537cbd6e114f51467093a.jpg",
    ingredients: [
      "500g pork (cut into bite-size pieces)",
      "2 tbsp soy sauce",
      "1 tsp salt",
      "1 egg",
      "3 tbsp cornstarch",
      "Oil for frying",
      "1 red bell pepper, chopped",
      "1 green bell pepper, chopped",
      "1 onion, chopped",
      "½ cup pineapple chunks",
      "3 tbsp ketchup",
      "2 tbsp vinegar",
      "2 tbsp sugar",
      "1 tsp soy sauce",
      "½ cup water"
    ],
    instructions: [
      "Marinate pork with soy sauce, salt, and egg for 15–20 mins.",
      "Coat pork pieces with cornstarch and deep-fry until golden and crispy. Drain on paper towel.",
      "In a pan, heat a little oil. Stir-fry onions, bell peppers, and pineapple chunks for 2–3 mins.",
      "Mix ketchup, vinegar, sugar, soy sauce, and water to make the sauce. Pour into pan and bring to a simmer.",
      "Add fried pork to the sauce, toss to coat well, cook 2–3 mins until sauce thickens.",
      "Serve hot with steamed rice."
    ]
  },
  {
    name: "Dumplings",
    category: "chinese",
    img: "https://i.pinimg.com/1200x/fc/19/a2/fc19a211ebf5184eeb8fc33930df20a5.jpg",
    ingredients: [
      "200g minced pork or chicken",
      "1 cup cabbage, finely chopped",
      "2 green onions, chopped",
      "1 tsp ginger, minced",
      "2 tsp soy sauce",
      "1 tsp sesame oil",
      "1 tsp salt",
      "1 pack dumpling wrappers",
      "Water for sealing edges",
      "Oil for frying (optional)"
    ],
    instructions: [
      "Mix minced meat, cabbage, green onions, ginger, soy sauce, sesame oil, and salt in a bowl.",
      "Place a spoonful of filling in the center of a dumpling wrapper. Wet edges with water and fold/seal.",
      "Steam dumplings 10–12 mins or boil in water until they float. Optionally, pan-fry for crispy bottoms.",
      "Serve with soy sauce or chili oil."
    ]
  },
  {
    name: "Spring Rolls",
    category: "chinese",
    img: "https://i.pinimg.com/736x/90/da/03/90da0338165b898d0f3ea6fb48b06d6f.jpg",
    ingredients: [
      "1 pack spring roll wrappers",
      "1 cup cabbage, shredded",
      "1 carrot, julienned",
      "50g bean sprouts",
      "2 green onions, chopped",
      "1 tsp soy sauce",
      "1 tsp sesame oil",
      "Salt and pepper to taste",
      "Oil for deep frying"
    ],
    instructions: [
      "Heat a little oil in a pan. Stir-fry cabbage, carrot, bean sprouts, and green onions for 2–3 mins.",
      "Add soy sauce, sesame oil, salt, and pepper. Cook 1 min and let it cool.",
      "Place filling on a wrapper, fold and roll tightly, sealing edges with water.",
      "Deep fry in hot oil until golden brown. Drain and serve hot with dipping sauce."
    ]
  },
  {
    name: "Hot and Sour Soup",
    category: "chinese",
    img: "https://i.pinimg.com/736x/1d/96/70/1d96705f50429ef107e990b511f3c165.jpg",
    ingredients: [
      "4 cups chicken or vegetable broth",
      "100g mushrooms, sliced",
      "100g tofu, cubed",
      "1 small carrot, julienned",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp chili paste",
      "1 tsp sesame oil",
      "2 tsp cornstarch mixed with 2 tbsp water",
      "1 egg, beaten",
      "Salt and pepper to taste",
      "2 green onions, chopped"
    ],
    instructions: [
      "Bring broth to a boil. Add mushrooms, tofu, and carrot, simmer 5 mins.",
      "Add soy sauce, vinegar, chili paste, and sesame oil.",
      "Stir in cornstarch slurry to thicken soup.",
      "Slowly pour in beaten egg while stirring to create egg ribbons.",
      "Season with salt and pepper. Garnish with chopped green onions and serve hot."
    ]
  },
  {
    name: "Fried Rice",
    category: "chinese",
    img: "https://i.pinimg.com/736x/6c/f1/05/6cf105292cf6d8baedafaf5937bbe42a.jpg",
    ingredients: [
      "3 cups cooked rice (preferably chilled)",
      "2 eggs, beaten",
      "1 cup mixed vegetables (peas, carrots, corn)",
      "2 green onions, chopped",
      "2 tbsp soy sauce",
      "1 tsp sesame oil",
      "2 tbsp oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a wok or large pan. Scramble eggs, remove and set aside.",
      "Add more oil, stir-fry vegetables 2–3 mins until tender-crisp.",
      "Add rice, soy sauce, sesame oil, and salt & pepper. Stir-fry 3–4 mins.",
      "Return scrambled eggs to pan, mix well with rice and vegetables.",
      "Add chopped green onions, stir, and serve hot."
    ]
  }
];

function Chinese() {
  const { recipeId } = useParams();
  const [activeTab, setActiveTab] = useState("ingredients");
  const [searchIngredient, setSearchIngredient] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(chineseRecipes);
  const [error, setError] = useState("");

  const selectedRecipe = recipeId
    ? chineseRecipes.find(
        r => r && r.name && r.name.toLowerCase().replace(/\s/g, "-") === recipeId
      )
    : null;

  useEffect(() => {
    if (selectedRecipe) window.scrollTo(0, 0);
  }, [selectedRecipe]);

  const searchRecipes = () => {
    const query = searchIngredient.trim().toLowerCase();
    if (!query) {
      setError("Please enter an ingredient");
      setFilteredRecipes([]);
      return;
    }
    const results = chineseRecipes.filter(r =>
      r.ingredients.some(ing => ing.toLowerCase().includes(query))
    );
    if (results.length === 0) {
      setError("No recipes found with that ingredient");
    } else {
      setError("");
    }
    setFilteredRecipes(results);
  };

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

  // Default view: show search + recipe list
  return (
    <div className="cuisine-container">
      <h2>Chinese Recipes</h2>

      {/* Search box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by ingredient..."
          value={searchIngredient}
          onChange={(e) => setSearchIngredient(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchRecipes()}
        />
        <button onClick={searchRecipes}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}

      <div className="recipe-list">
        {filteredRecipes.map(r => (
          <div key={r.name || Math.random()} className="sample-card">
            <Link to={`/chinese/${(r.name || "").toLowerCase().replace(/\s/g, "-")}`}>
              <h3>{r.name || "Unnamed Recipe"}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chinese;