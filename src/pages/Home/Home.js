import React from "react";

import "./Home.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SlideView from "../../Components/SlideViews/Slideview";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="my-jumbotron">
        <Link style={{ textDecoration: "none" }} reloadDocument="/">
          <img
            className="header__logo"
            src="https://icon-library.com/images/cooking-icon-png/cooking-icon-png-0.jpg"
            alt="Cooking logo"
          />
        </Link>
        <h2>COOKING RECIPE</h2>
        <SearchBar />
      </div>
      <SlideView />
    </div>
  );
};

export default Home;
