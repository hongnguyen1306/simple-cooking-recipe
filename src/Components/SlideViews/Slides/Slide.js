import React from "react";
import { Link } from "react-router-dom";

import "./Slide.css";

// import LoyaltyIcon from "@material-ui/icons/Loyalty";

const Slides = ({ alternate, shoes, off }) => {
  return (
    <>
      <div className="slides__clearance">
        <span className="slides__clearanceSale">Clearance Sale</span>
        {/* <LoyaltyIcon className="slides__icon" /> */}
      </div>
      <div className="slides">
        <img className="slides__img" src="pho.jpg" alt={alternate} />
        <div className="slides__right">
          <span className="slides__tag">
            Exclusive <span className="slides__shoes">{shoes}</span> for{" "}
            <span className="slides__sale">Sale</span>
          </span>
          {/* <Link to={pathTo}> */}
          <Link to={"/cookingdetail"}>
            <button className="slides__button">Explore More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slides;
