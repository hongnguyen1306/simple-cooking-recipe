import React, { useEffect, useState } from "react";

import Header from "../../Components/Header/Header";
import "./Results.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Results = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  console.log("searchQuery ", searchQuery);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/recipesIngredients/ingredient/${searchQuery}`
      )
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>EXPLORE COOKING RECIPE</h1>
      <section className="category" id="category">
        {recipes.map((recipe) => (
          <div
            className="item"
            key={recipe.id}
            style={{ backgroundImage: `url("${recipe.img}")` }}
          >
            <Link
              to={"/cookingdetail?recipe=" + recipe.id}
              style={{ textDecoration: "none" }}
            >
              <p className="item_name">{recipe.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Results;
