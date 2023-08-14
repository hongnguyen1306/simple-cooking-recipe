import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link style={{ textDecoration: "none" }} to="/">
          <img
            className="header__logo"
            src="https://icon-library.com/images/cooking-icon-png/cooking-icon-png-0.jpg"
            alt="Cooking logo"
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="header__navItems">HOME</span>
        </Link>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
