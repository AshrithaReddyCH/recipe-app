
  // src/pages/American.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./cuisine.css";

export const americanRecipes = [
  {
    name: "Cheeseburger",
    category: "american",
    img: "https://i.pinimg.com/736x/6d/c0/27/6dc02784e3583f9f9d1f6fdb57bf482c.jpg",
    ingredients: [
      "250g ground beef (80% lean)",
      "Salt & pepper to taste",
      "1 tsp Worcestershire sauce (optional)",
      "2 burger buns",
      "2 slices cheddar cheese",
      "Lettuce leaves",
      "2 slices tomato",
      "2 slices onion (optional)",
      "Pickles (optional)",
      "Ketchup, mustard, or mayo as desired",
      "Butter or oil for toasting buns"
    ],
    instructions: [
      "Season ground beef with salt, pepper, and Worcestershire sauce. Form into 2 patties.",
      "Heat a grill or pan over medium-high heat. Cook patties 3–4 minutes per side. Add cheese in last minute.",
      "Slice buns, butter, and toast.",
      "Assemble burger: lettuce, tomato, onion, patty with cheese, pickles, condiments, top bun."
    ]
  },
  {
    name: "Hot Dog",
    category: "american",
    img: "https://i.pinimg.com/736x/c0/23/e2/c023e26e6d00b5b8d37c7aebb6b4111c.jpg",
    ingredients: [
      "2 hot dog sausages (beef, pork, or chicken)",
      "2 hot dog buns",
      "1 tbsp butter (for toasting buns)",
      "Optional toppings: ketchup, mustard, mayonnaise, chopped onions, relish, pickles, cheese"
    ],
    instructions: [
      "Boil, grill, or pan-fry sausages for 5–7 minutes until fully cooked.",
      "Slice buns, spread butter, and toast.",
      "Place sausage in bun. Add desired toppings. Serve hot."
    ]
  },
  {
    name: "Fried Chicken",
    category: "american",
    img: "https://i.pinimg.com/1200x/26/99/12/269912a43432af5c9cf603093bb984c9.jpg",
    ingredients: [
      "500g chicken pieces (drumsticks, thighs, or wings)",
      "1 cup buttermilk (or milk + 1 tsp lemon juice)",
      "1 tsp salt",
      "½ tsp black pepper",
      "½ tsp paprika (optional)",
      "1 cup all-purpose flour",
      "½ tsp salt",
      "½ tsp black pepper",
      "½ tsp paprika or chili powder (optional)",
      "Oil for frying"
    ],
    instructions: [
      "Mix chicken with buttermilk, salt, pepper, and paprika. Refrigerate for at least 1 hour.",
      "Mix flour, salt, pepper, and paprika. Dredge chicken pieces in flour mixture.",
      "Heat oil to 175°C (350°F). Fry chicken in batches 10–15 mins until golden and cooked.",
      "Drain on paper towels and serve hot with sides."
    ]
  },
  {
    name: "Apple Pie",
    category: "american",
    img: "https://i.pinimg.com/1200x/72/01/46/720146e26b0f88079c71acc59310480f.jpg",
    ingredients: [
      "2 ½ cups all-purpose flour",
      "1 cup unsalted butter, cold and cubed",
      "¼ cup sugar",
      "½ tsp salt",
      "6–8 tbsp cold water",
      "5–6 medium apples (Granny Smith or Honeycrisp), peeled, cored, sliced",
      "¾ cup sugar",
      "2 tbsp all-purpose flour",
      "1 tsp ground cinnamon",
      "¼ tsp ground nutmeg",
      "1 tsp lemon juice",
      "1 tsp vanilla extract (optional)",
      "1 egg, beaten (optional, for egg wash)",
      "1 tbsp sugar (optional, for sprinkling)"
    ],
    instructions: [
      "Mix flour, sugar, and salt. Cut in butter until mixture resembles coarse crumbs. Add cold water gradually and knead lightly into dough. Divide into 2 portions, wrap, refrigerate 30 mins.",
      "Mix apple slices with sugar, flour, cinnamon, nutmeg, lemon juice, and vanilla. Let sit 10 mins.",
      "Roll out one portion of dough, line 9-inch pie pan, add apple filling. Roll second portion and cover. Trim edges, cut slits on top. Brush with egg and sprinkle sugar if desired.",
      "Preheat oven to 200°C (400°F). Bake 20 mins, reduce to 180°C (350°F), bake 30–35 mins until golden and bubbly.",
      "Cool slightly before slicing. Serve warm or at room temperature, optionally with vanilla ice cream."
    ]
  },
  {
    name: "BBQ Ribs",
    category: "american",
    img: "https://i.pinimg.com/1200x/83/8f/f8/838ff8a6b4261baa871b6708e4ff80b9.jpg",
    ingredients: [
      "1 kg pork ribs",
      "Salt & pepper to taste",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "1 cup ketchup",
      "¼ cup brown sugar",
      "2 tbsp apple cider vinegar",
      "1 tbsp Worcestershire sauce",
      "1 tsp smoked paprika",
      "1 tsp chili powder (optional)"
    ],
    instructions: [
      "Remove membrane from back of ribs. Rub with salt, pepper, garlic powder, and paprika.",
      "Preheat oven to 150°C (300°F). Wrap ribs in foil and bake 1.5–2 hours until tender.",
      "Combine ketchup, brown sugar, vinegar, Worcestershire sauce, smoked paprika, chili powder, salt, and pepper in saucepan. Simmer 10–15 mins until thickened.",
      "Brush ribs with sauce. Grill or broil 5–10 mins, turning and basting until caramelized.",
      "Slice between bones and serve hot with extra sauce. Optional sides: coleslaw, baked beans, corn on the cob."
    ]
  },
  {
    name: "Mac and Cheese",
    category: "american",
    img: "https://i.pinimg.com/1200x/07/b9/20/07b920bd81bd4eb1606f03734c7a7461.jpg",
    ingredients: [
      "250g elbow macaroni",
      "Salt for boiling water",
      "2 tbsp butter",
      "2 tbsp all-purpose flour",
      "2 cups milk",
      "1 ½ cups shredded cheddar cheese",
      "½ tsp mustard powder (optional)",
      "Salt & pepper to taste",
      "¼ tsp paprika (optional, for topping)"
    ],
    instructions: [
      "Boil macaroni in salted water until al dente. Drain and set aside.",
      "In a saucepan, melt butter over medium heat. Stir in flour and cook 1–2 mins to form roux.",
      "Gradually whisk in milk until smooth and slightly thickened. Add cheddar, mustard powder, salt, and pepper. Stir until creamy.",
      "Add cooked pasta to cheese sauce and mix well. Optionally, transfer to baking dish, sprinkle paprika or extra cheese, and bake 10–15 mins at 180°C (350°F) until golden.",
      "Serve hot as a side or main dish."
    ]
  }
];

function American() {
  const { recipeId } = useParams();
  const [activeTab, setActiveTab] = useState("ingredients");

  const selectedRecipe = recipeId
    ? americanRecipes.find(
        (r) =>
          r &&
          r.name &&
          r.name.toLowerCase().replace(/\s/g, "-") === recipeId
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

  // If no recipe selected, show all recipes
  return (
    <div className="cuisine-container">
      <h2>American Recipes</h2>
      <div className="recipe-list">
        {americanRecipes.map((r) => (
          <div key={r.name || Math.random()} className="sample-card">
            <Link
              to={`/american/${(r.name || "").toLowerCase().replace(/\s/g, "-")}`}
            >
              <h3>{r.name || "Unnamed Recipe"}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default American;

  
  