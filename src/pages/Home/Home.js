import React from "react";

import SlideView from "./SlideViews/Slideview";
import Header from "../../Components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SlideView />
    </div>
  );
};

export default Home;
