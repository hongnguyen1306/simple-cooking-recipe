import React from "react";

import "./Home.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SlideView from "../../Components/SlideViews/Slideview";

const Home = () => {
  return (
    <div>
      <div className="my-jumbotron">
        <h1>Welcome</h1>
        <SearchBar />
      </div>
      <SlideView />
    </div>
  );
};

export default Home;
