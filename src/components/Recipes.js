import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "./Recipe";

//used to fetch data from a another website
const App = () => {
  const APP_ID = "b6c0ff52";
  const APP_KEY = "b30333097dcdfaf437396785aa1b240c";

  //Creating the states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("vegan");

  useEffect(() => {
    getRecipes();
  }, [query]);

  //requesting and getting data from another website
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    //search form and mapping through each recipe
    <div className="App">
      <h3>#Made using <a href="https://developer.edamam.com/edamam-docs-recipe-api">Recipe Search API Documentation - Edamam</a></h3>
      <h3>#Made with the guidance of <a href="https://www.youtube.com/watch?v=U9T6YkEDkMo">DevEd Recipe App</a> Video</h3>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
