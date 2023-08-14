import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SlideView.css";
import Slides from "./Slides/Slide";

const SlideView = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="slideView__wrapper">
      <Slider
        className="slideView__slider"
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        dots={true}
      >
        {recipes.map((recipe) => (
          <div className="slideView__page" key={recipe.id}>
            <Slides
              image={recipe.img}
              alternate={recipe.name}
              name={recipe.name}
              cuisine={recipe.cuisine_name}
              id={recipe.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideView;
