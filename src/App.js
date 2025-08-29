// App.js
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"; 

import Italian, { italianRecipes } from "./cuisine/Italian";
import SouthIndian, { southIndianRecipes } from "./cuisine/SouthIndian";
import American, { americanRecipes } from "./cuisine/American";
import Thai, { thaiRecipes } from "./cuisine/Thai";
import Chinese, { chineseRecipes } from "./cuisine/Chinese";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Search function (local recipes only)
  const searchRecipes = () => {
    const query = ingredient.trim().toLowerCase();

    if (!query) {
      setError("Please enter an ingredient");
      setRecipes([]);
      return;
    }

    setError("");
    setLoading(true);

    const allRecipes = [
      ...italianRecipes,
      ...southIndianRecipes,
      ...americanRecipes,
      ...thaiRecipes,
      ...chineseRecipes,
    ];

    const matchedRecipes = allRecipes.filter(
      (recipe) =>
        recipe &&
        recipe.name &&
        Array.isArray(recipe.ingredients) &&
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        )
    );

    if (matchedRecipes.length === 0) {
      setError("No recipes found for that ingredient.");
      setRecipes([]);
    } else {
      setError("");
      setRecipes(matchedRecipes);
    }

    setLoading(false);
  };

  // Scroll to a specific section (Italian, South Indian, etc.)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Reset search & scroll to top
  const resetSearch = () => {
    setIngredient("");
    setRecipes([]);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <nav className="navbar">
              {/* Left: Logo + Tagline */}
              <div className="navbar-left">
                <h2 className="logo" onClick={resetSearch}>🍴 Recipe Finder</h2>
                <p className="tagline">Discover recipes with the ingredients you have</p>
              </div>

              {/* Right: Navigation Links */}
              <div className="navbar-right">
                <button className="nav-link" onClick={resetSearch}>Home</button>
                <button className="nav-link" onClick={() => { resetSearch(); scrollToSection("italian"); }}>Italian</button>
                <button className="nav-link" onClick={() => { resetSearch(); scrollToSection("south-indian"); }}>South Indian</button>
                <button className="nav-link" onClick={() => { resetSearch(); scrollToSection("american"); }}>American</button>
                <button className="nav-link" onClick={() => { resetSearch(); scrollToSection("thai"); }}>Thai</button>
                <button className="nav-link" onClick={() => { resetSearch(); scrollToSection("chinese"); }}>Chinese</button>
              </div>
            </nav>

            <div className="recipe-box">
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

            {loading && <p>Loading recipes...</p>}
            {error && <p className="error">{error}</p>}

            <div className="cards-container">
              {recipes.length > 0 ? (
                <>
                  <div className="back-home-wrapper">
                    <button className="back-home-btn-symbol" onClick={resetSearch}>←</button>
                  </div>

                  <div className="cards-grid">
                    {recipes.map((recipe, index) => (
                      <Link
                        key={index}
                        to={`/${(recipe.category || "").toLowerCase()}/${(recipe.name || "")
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className={`sample-card card${index + 1}`}
                        style={{ backgroundImage: `url(${recipe.img})` }}
                      >
                        <h3>{recipe.name || "Unnamed Recipe"}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Italian */}
                  <h2 id="italian" className="section-heading">Italian</h2>
                  <hr />
                  <div className="cards-grid">
                    {italianRecipes.map((recipe, index) => (
                      <Link
                        key={index}
                        to={`/italian/${(recipe.name || "").toLowerCase().replace(/\s/g, "-")}`}
                        className={`sample-card card${index + 1}`}
                      >
                        <h3>{recipe.name}</h3>
                      </Link>
                    ))}
                  </div>

                  {/* South Indian */}
                  <h2 id="south-indian" className="section-heading">South Indian</h2>
                  <hr />
                  <div className="cards-grid">
                    {southIndianRecipes.map((recipe, index) => (
                      <Link
                        key={index}
                        to={`/south-indian/${(recipe.name || "").toLowerCase().replace(/\s/g, "-")}`}
                        className={`sample-card card${index + 7}`}
                      >
                        <h3>{recipe.name}</h3>
                      </Link>
                    ))}
                  </div>

                  {/* American */}
                  <h2 id="american" className="section-heading">American</h2>
                  <hr />
                  <div className="cards-grid">
                    {americanRecipes.map((recipe, index) => (
                      <Link
                        key={index}
                        to={`/american/${(recipe.name || "").toLowerCase().replace(/\s/g, "-")}`}
                        className={`sample-card card${index + 13}`}
                      >
                        <h3>{recipe.name}</h3>
                      </Link>
                    ))}
                  </div>

                  {/* Thai */}
                  <h2 id="thai" className="section-heading">Thai</h2>
                  <hr />
                  <div className="cards-grid">
                    {thaiRecipes.map((recipe, index) => (
                      <Link
                        key={index}
                        to={`/thai/${(recipe.name || "").toLowerCase().replace(/\s/g, "-")}`}
                        className={`sample-card card${index + 19}`}
                      >
                        <h3>{recipe.name}</h3>
                      </Link>
                    ))}
                  </div>

                  {/* Chinese */}
                  <h2 id="chinese" className="section-heading">Chinese</h2>
                  <hr />
                  <div className="cards-grid">
                    {chineseRecipes.map((recipe, index) => (
                      <Link
                        key={index}
                        to={`/chinese/${(recipe.name || "").toLowerCase().replace(/\s/g, "-")}`}
                        className={`sample-card card${index + 25}`}
                      >
                        <h3>{recipe.name}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        }
      />

      {/* Cuisine Pages */}
      <Route path="/italian" element={<Italian />} />
      <Route path="/italian/:recipeId" element={<Italian />} />
      <Route path="/south-indian" element={<SouthIndian />} />
      <Route path="/south-indian/:recipeId" element={<SouthIndian />} />
      <Route path="/american" element={<American />} />
      <Route path="/american/:recipeId" element={<American />} />
      <Route path="/thai" element={<Thai />} />
      <Route path="/thai/:recipeId" element={<Thai />} />
      <Route path="/chinese" element={<Chinese />} />
      <Route path="/chinese/:recipeId" element={<Chinese />} />
    </Routes>
  );
}

export default App;
