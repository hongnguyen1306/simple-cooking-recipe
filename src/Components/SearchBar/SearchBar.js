import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Lấy hàm navigate từ hooks
  const navigate = useNavigate();

  const handleSearch = () => {
    // Điều hướng đến đường dẫn tìm kiếm với giá trị searchTerm
    navigate(`/results?search=${searchTerm}`);
  };

  return (
    <div class="wrap">
      <div class="search">
        <input
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          className="searchTerm"
          id="input_text"
        ></input>
        <button type="submit" className="searchButton" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
