import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SlideView.css";
import Slider from "react-slick";
import Slides from "./Slides/Slide";

const SlideView = () => {
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
        <div className="slideView__page">
          <Slides
            image="123"
            alternate="Air Jordan"
            shoes="Air Jordan Retros"
            off={40}
            pathTo="/cookingdetail"
          />
        </div>
        <div className="slideView__page">
          <Slides
            image="123"
            alternate="Nike Blazers"
            shoes="NIKE Blazers"
            off={25}
            pathTo="/cookingdetail"
          />
        </div>
        <div className="slideView__page">
          <Slides
            image="123"
            alternate="Nike Air Max"
            shoes="NIKE Air Max"
            off={20}
            pathTo="/cookingdetail"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlideView;
