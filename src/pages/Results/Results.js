import React from "react";

import Header from "../../Components/Header/Header";
import "./Results.css";
import { Link } from "react-router-dom";

const Results = () => (
  <div>
    <Header />
    <h1>EXPLORE COOKING RECIPE</h1>
    <section className="category" id="category">
      <div
        className="item1"
        style={{ backgroundImage: `url("pho.jpg")`, backgroundSize: "contain" }}
      >
        <Link style={{ textDecoration: "none" }} to="/cookingdetail">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
      <div
        className="item2"
        style={{ backgroundImage: `url("pho.jpg")`, backgroundSize: "contain" }}
      >
        <Link style={{ textDecoration: "none" }} to="/cookingdetail">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
      <div
        className="item3"
        style={{ backgroundImage: `url("pho.jpg")`, backgroundSize: "contain" }}
      >
        <Link style={{ textDecoration: "none" }} to="/cookingdetail">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
      <div
        className="item4"
        style={{ backgroundImage: `url("pho.jpg")`, backgroundSize: "contain" }}
      >
        <Link style={{ textDecoration: "none" }} to="/cookingdetail">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
      <div
        className="item5"
        style={{ backgroundImage: `url("pho.jpg")`, backgroundSize: "contain" }}
      >
        <Link style={{ textDecoration: "none" }} to="/cookingdetail">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
      {
        <div
          className="item6"
          style={{
            backgroundImage: `url("pho.jpg")`,
            backgroundSize: "contain",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/cookingdetail">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
      }
    </section>
  </div>
);

export default Results;
