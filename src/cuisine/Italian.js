// src/pages/Italian.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./cuisine.css";

export const italianRecipes = [

    {
      name: "Margherita Pizza",
      category: "italian",
      img: "https://i.pinimg.com/1200x/76/27/e9/7627e9ccac872d4871a9d6a108c5115f.jpg",
      ingredients: [
        "1 cup all-purpose flour (plus extra for dusting)",
        "1 tsp active dry yeast",
        "½ tsp sugar",
        "½ tsp salt",
        "½ cup warm water",
        "1 tsp olive oil",
        "100g mozzarella cheese",
        "50g tomato sauce",
        "Fresh basil leaves",
        "Olive oil",
        "Salt to taste"
      ],
      instructions: [
        "In a small bowl, dissolve sugar and yeast in warm water. Let it sit 5–10 minutes until frothy.",
        "In a large bowl, mix flour and salt.",
        "Add the yeast mixture and olive oil to the flour. Mix until it forms a dough.",
        "Knead on a floured surface for 5–7 minutes until smooth and elastic.",
        "Place the dough in a lightly oiled bowl, cover, and let it rise for 1–2 hours until doubled in size.",
        "Preheat the oven to 220°C (425°F).",
        "Punch down the dough and roll it into a circle about ½ cm thick.",
        "Spread tomato sauce evenly over the pizza base.",
        "Sprinkle mozzarella cheese on top.",
        "Add fresh basil leaves and a drizzle of olive oil.",
        "Bake for 12–15 minutes until the crust is golden and cheese is bubbly.",
        "Slice and serve hot."
      ]
    },
    {
      name: "Spaghetti Carbonara",
      category: "italian",
      img: "https://i.pinimg.com/1200x/0f/2a/87/0f2a87cd1a23dd8443c404c893aefda6.jpg",
      ingredients: [
        "200g spaghetti",
        "100g pancetta (or guanciale, bacon if unavailable)",
        "2 large eggs",
        "50g grated Parmesan cheese (or Pecorino Romano)",
        "2 cloves garlic (optional)",
        "Salt (for pasta water)",
        "Freshly ground black pepper"
      ],
      instructions: [
        "Bring a pot of salted water to a boil. Cook spaghetti until al dente (slightly firm). Reserve about ½ cup of pasta water, then drain.",
        "In a large pan, fry pancetta (or guanciale) until golden and crispy. Add garlic cloves if using, then remove them once fragrant.",
        "In a bowl, whisk together eggs and grated Parmesan cheese. Add a generous amount of freshly ground black pepper.",
        "Add drained spaghetti to the pan with pancetta. Toss well to coat in the rendered fat. Remove the pan from direct heat.",
        "Pour the egg-cheese mixture over the pasta while tossing quickly. Add a splash of reserved pasta water if needed to create a silky, creamy sauce.",
        "Plate the pasta, sprinkle more Parmesan and black pepper on top. Serve hot."
      ]
    },
    {
      name: "Lasagna",
      category: "italian",
      img: "https://i.pinimg.com/736x/b7/32/84/b732847d2b6dba5ec3f7a43199704574.jpg",
      ingredients: [
        "9–12 lasagna sheets (pre-cooked or boilable)",
        "400g minced beef (or mix of beef & pork)",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "400g canned tomatoes (or tomato puree)",
        "2 tbsp tomato paste",
        "1 tsp dried oregano",
        "1 tsp dried basil",
        "2 tbsp olive oil",
        "Salt and black pepper to taste",
        "200g mozzarella cheese, shredded",
        "50g Parmesan cheese, grated",
        "For béchamel sauce:",
        "2 tbsp butter",
        "2 tbsp flour",
        "2 cups milk",
        "Pinch of nutmeg (optional)",
        "Salt & pepper"
      ],
      instructions: [
        "Heat olive oil in a pan, sauté onion and garlic until soft.",
        "Add minced beef, cook until browned.",
        "Stir in tomato paste, canned tomatoes, oregano, basil, salt & pepper.",
        "Let simmer for 20 minutes until thickened.",
        "For the béchamel: melt butter, whisk in flour, then gradually add milk while whisking until smooth. Season with salt, pepper, and nutmeg.",
        "Preheat oven to 180°C (350°F).",
        "In a baking dish, spread a thin layer of meat sauce, then lasagna sheets, then béchamel, then mozzarella. Repeat layers.",
        "Finish with béchamel and sprinkle Parmesan on top.",
        "Cover with foil and bake for 25 minutes. Remove foil and bake another 15 minutes until golden and bubbling.",
        "Let rest for 10 minutes before slicing and serving."
      ]
    },
    {
      name: "Mushroom Risotto",
      category: "italian",
      img: "https://i.pinimg.com/736x/a8/f6/8b/a8f68b631ef168dc8cd3cb971dcd74eb.jpg", 
      ingredients: [
        "200g Arborio rice (or other risotto rice)",
        "150g mushrooms (button, cremini, or porcini), sliced",
        "1 small onion, finely chopped",
        "2 cloves garlic, minced",
        "2 tbsp olive oil (or butter)",
        "750ml vegetable or chicken stock (kept warm)",
        "60ml white wine (optional)",
        "50g Parmesan cheese, grated",
        "1 tbsp butter (for finishing)",
        "Salt & black pepper, to taste",
        "Fresh parsley, chopped (for garnish)"
      ],
      instructions: [
        "Keep vegetable or chicken stock warm in a saucepan over low heat.",
        "Heat 1 tbsp olive oil in a large pan. Sauté mushrooms until golden, then remove and set aside.",
        "In the same pan, add remaining olive oil. Sauté onion until soft, then add garlic for 1 minute.",
        "Add Arborio rice, stir to coat with oil, and cook for 1–2 minutes until edges look translucent.",
        "Pour in white wine (if using) and stir until absorbed.",
        "Add 1 ladle of warm stock, stir until absorbed. Repeat, one ladle at a time, stirring continuously for 18–20 minutes.",
        "When rice is creamy and al dente, stir in cooked mushrooms, butter, Parmesan, salt, and pepper.",
        "Garnish with parsley and extra Parmesan. Serve hot."
      ]
    },
    {
    name: "Bruschetta al Pomodoro",
    category: "italian",
    img: "https://i.pinimg.com/736x/cd/df/e6/cddfe6414db0b5ac748e5d45f1252aab.jpg", 
    ingredients: [
      "1 baguette or Italian bread (sliced)",
      "3–4 ripe tomatoes, diced",
      "2 cloves garlic",
      "Fresh basil leaves, chopped",
      "2 tbsp extra virgin olive oil",
      "1 tsp balsamic vinegar (optional)",
      "Salt & black pepper, to taste"
    ],
    instructions: [
      "Dice the tomatoes and place them in a bowl. Add chopped basil, olive oil, balsamic vinegar (if using), salt, and black pepper. Mix gently and let it rest for 10 minutes.",
      "Slice baguette or Italian bread. Toast/grill the slices until golden brown. While still warm, rub one side of each slice with a cut garlic clove.",
      "Spoon the tomato mixture onto the toasted bread slices. Drizzle with a little extra olive oil.",
      "Arrange on a plate and serve immediately as a starter or snack."
    ]
  },
    {
  name: "Tiramisu",
  category: "italian",
  img: "https://i.pinimg.com/736x/0e/c2/89/0ec289492947872976c5c52215280faa.jpg", 
  ingredients: [
    "250g mascarpone cheese",
    "3 large eggs (yolks & whites separated)",
    "75g sugar (about 6 tbsp)",
    "200g ladyfinger biscuits (savoiardi)",
    "200ml strong espresso coffee (cooled)",
    "2 tbsp coffee liqueur (Kahlúa or Marsala, optional)",
    "Unsweetened cocoa powder (for dusting)"
  ],
  instructions: [
    "Beat egg yolks with sugar until pale and creamy. Add mascarpone and mix until smooth.",
    "In another bowl, whisk egg whites until stiff peaks form. Gently fold them into the mascarpone mixture.",
    "Mix espresso with coffee liqueur (if using). Quickly dip each ladyfinger biscuit into the coffee — do not soak too long.",
    "In a serving dish, layer soaked ladyfingers on the bottom, then spread half the mascarpone cream on top.",
    "Add another layer of soaked ladyfingers, then spread the remaining mascarpone cream.",
    "Cover and refrigerate for at least 4 hours (overnight is best).",
    "Dust generously with cocoa powder just before serving. Slice and serve chilled."
  ]
}
  ];

function Italian() {
  const { recipeId } = useParams();
  const [activeTab, setActiveTab] = useState("ingredients");

  const selectedRecipe = recipeId
    ? italianRecipes.find(
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
      <h2>Italian Recipes</h2>
      <div className="recipe-list">
        {italianRecipes.map((r) => (
          <div key={r.name || Math.random()} className="sample-card">
            <Link to={`/italian/${(r.name || "").toLowerCase().replace(/\s/g, "-")}`}>
              <h3>{r.name || "Unnamed Recipe"}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Italian;
