import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./CookingDetail.css";

const CookingDetail = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("recipe");

  const [recipe, setRecipe] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [recipeDirection, setRecipeDirection] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/recipes/${searchQuery}`)
      .then((response) => {
        const jsonDescription = JSON.parse(response.data.description);
        response.data.description = jsonDescription;
        console.log(response.data);
        setRecipeSteps(response.data.steps);
        setRecipe(response.data);
        setRecipeDirection(Object.keys(jsonDescription));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="prodcontainer">
        <div className="prodimg">
          <img className="cover" src={recipe.img} alt={recipe.img} />
          <div className="prodtitle">
            <h1>{recipe.name}</h1>
          </div>
        </div>
        <div className="proddetails">
          <div className="prodin">
            <hr />
            <div className="proddesc">
              <p>
                <strong>Ingredients:</strong>
              </p>
              <ul className="list">
                {recipeSteps.map((detail) => (
                  <li className="list_item">{detail.detail}</li>
                ))}
              </ul>
              <br></br>
              <br></br>
              <p></p>
            </div>
            <hr />
            <div className="proddesc">
              <h3></h3>
              <p>
                <strong>Directions:</strong>
              </p>
              <ol>
                {recipeDirection.map((stepNumber) => (
                  <li className="list_item" key={stepNumber}>
                    {recipe.description[stepNumber]}
                  </li>
                ))}
              </ol>
              <p></p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingDetail;
