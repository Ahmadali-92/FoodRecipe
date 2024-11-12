import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/food-logo.png";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const searchQueryButtonHandler = () => {
    if (query.length > 0) navigate(`/search/${query}`);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };

  return (
    <header>
      <div className="header">
        <div className="logoImage">
          <img src={logo} alt="Logo" onClick={(e) => navigate("/")} />
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for recipes...."
            value={query}
            onKeyUp={searchQueryHandler}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <CiSearch
            className="searchIcon"
            onClick={() => {
              searchQueryButtonHandler();
              setQuery("");
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
