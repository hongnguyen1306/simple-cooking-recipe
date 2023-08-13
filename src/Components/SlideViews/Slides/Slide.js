import React from "react";
import { Link } from "react-router-dom";

import "./Slide.css";

const Slides = ({ image, alternate, name, id }) => {
  return (
    <>
      <div className="slides__clearance">
        <span className="slides__clearanceSale">{name}</span>
      </div>
      <div className="slides">
        <img className="slides__img" src={image} alt={alternate} />
        <div className="slides__right">
          <span className="slides__tag">
            <span className="slides__shoes">{name}</span>
          </span>
          <Link to={"/cookingdetail?recipe=" + id}>
            <button className="slides__button">Detail</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slides;
