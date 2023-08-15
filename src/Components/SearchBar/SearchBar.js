import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("cuisine");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/results?${selectedOption}=${searchTerm}`);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          placeholder="What are you looking for? e.g: European, egg, chicken, ..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          className="searchTerm"
          id="input_text"
        ></input>
        <select
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
          className="searchOption"
        >
          <option className="option" value="cuisine">
            Cuisine
          </option>
          <option className="option" value="ingredient">
            Ingredient
          </option>
        </select>
      </div>
      <button type="submit" className="searchButton" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
