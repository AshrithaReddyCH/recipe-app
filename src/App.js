import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipesByCategory, setRecipesByCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchHeading, setSearchHeading] = useState("");

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    setLoading(true);
    setSearchHeading("");
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await res.json();
      if (data.meals) {
        const shuffled = data.meals.sort(() => 0.5 - Math.random());
        const grouped = {};
        shuffled.forEach((meal) => {
          const category = meal.strCategory || "Other";
          if (!grouped[category]) grouped[category] = [];
          if (grouped[category].length < 6) {
            grouped[category].push({
              id: meal.idMeal,
              name: meal.strMeal,
              img: meal.strMealThumb,
            });
          }
        });
        setRecipesByCategory(grouped);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async () => {
    const query = ingredient.trim();
    if (!query) {
      setError("Please enter an ingredient");
      setRecipesByCategory({});
      setSearchHeading("");
      return;
    }
    setError("");
    setLoading(true);
    setSearchHeading(query);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data.meals) {
        const grouped = {};
        grouped[query] = data.meals.slice(0, 6).map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          img: meal.strMealThumb,
        }));
        setRecipesByCategory(grouped);
      } else {
        setRecipesByCategory({});
        setError("No recipes found for that ingredient.");
      }
    } catch (err) {
      console.error(err);
      setRecipesByCategory({});
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const backToHome = () => {
    setIngredient("");
    setError("");
    setSearchHeading("");
    fetchRandomRecipes();
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo" onClick={backToHome}>
            🍴 Recipe Finder
          </h2>
          <p className="tagline">
            Discover recipes with the ingredients you have
          </p>
        </div>
      </nav>

      {/* Recipe Box / Search */}
      <div className="recipe-box">
        {searchHeading && (
          <button className="back-icon" onClick={backToHome} title="Back">
            <AiOutlineArrowLeft size={24} />
          </button>
        )}
        <h1>🍳 Recipe Ideas</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter ingredient (e.g. chicken)"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchRecipes()}
          />
          <button onClick={searchRecipes}>Search</button>
        </div>
      </div>

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Recipe Cards */}
      <div className="cards-container">
        {loading ? (
          <div className="cards-grid">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="sample-card skeleton-card" />
            ))}
          </div>
        ) : Object.keys(recipesByCategory).length > 0 ? (
          Object.entries(recipesByCategory).map(([category, recipes]) => (
            <div key={category}>
              <h2 className="section-heading">
                {searchHeading
                  ? `Recipes with "${searchHeading}"`
                  : category}
              </h2>
              <div className="cards-grid">
                {recipes.map((recipe, index) => (
                  <a
                    key={index}
                    href={`https://www.themealdb.com/meal/${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sample-card"
                    style={{ backgroundImage: `url(${recipe.img})` }}
                  >
                    <h3>{recipe.name}</h3>
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="info">
            🍽️ Start by typing an ingredient above to see recipes!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
