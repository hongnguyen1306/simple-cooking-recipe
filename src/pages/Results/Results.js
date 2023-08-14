import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Results.css";

const Results = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedOption = searchParams.get("cuisine")
      ? "cuisine"
      : "ingredient";
    const searchTerm = searchParams.get(selectedOption);

    axios
      .get(`http://localhost:5000/api/recipes/${selectedOption}/${searchTerm}`)
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [location.search]);

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
              className="item_name"
              to={"/cookingdetail?recipe=" + recipe.id}
              style={{ textDecoration: "none" }}
            >
              <p className="text_name">{recipe.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Results;
