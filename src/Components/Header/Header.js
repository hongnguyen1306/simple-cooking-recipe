import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  // const [navBar, setNavBar] = useState(false);

  // const [{ cart, user }] = useStateValue();

  // const showNavBar = () => setNavBar(!navBar);

  // const onLogin = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  return (
    <>
      <div className="header">
        <div className="header__menu"></div>
        <Link style={{ textDecoration: "none" }} to="/">
          {/* <img className="header__logo" src={HeaderLogo} /> */}
          <img
            className="header__logo"
            src="https://icon-library.com/images/cooking-icon-png/cooking-icon-png-0.jpg"
            alt="Cooking logo"
          />
        </Link>
        <div className="header__nav">
          <Link style={{ textDecoration: "none" }} to="/">
            <span className="header__navItems">COOKING</span>
          </Link>
        </div>
        <SearchBar />
        <div className="header__navRight"></div>
      </div>

      <div className="header2">
        <div className="header2__close"></div>
        <div className="header2__nav">
          <div className="header2__navItem"></div>
          <div className="header2__navItem"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
