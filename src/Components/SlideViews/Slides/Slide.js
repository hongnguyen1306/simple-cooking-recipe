import React from "react";
import { Link } from "react-router-dom";
import "./Slide.css";

const Slides = ({ image, alternate, name, id, cuisine }) => {
  return (
    <>
      <div className="slides">
        <img className="slides__img" src={image} alt={alternate} />
        <div className="slides__right">
          <p className="slides__clearanceSale">{cuisine} Cuisine</p>
          <span className="slides__recipe">{name}</span>
          <Link
            to={"/cookingdetail?recipe=" + id}
            style={{ textDecoration: "none" }}
          >
            <button className="slides__button">Detail</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slides;
