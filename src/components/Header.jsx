import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://raw.githubusercontent.com/alex88g/Images/main/Images/earth3.png"
            alt="Logo"
          />
        </Link>
        <Link to="/movies/popular">
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated">
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming">
          <span>Upcoming</span>
        </Link>
      </div>
      <div>
        <h1>
          <Link to="/login">Signout</Link>
        </h1>
      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login"}</h2> */}
    </div>
      <div className="headerRight">
        <Link to="/cart">
          <img
            className="header__cartIcon"
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG28.png"
            alt="Cart"
          />
        </Link>
      </div>
      </div>
    
  );
};

export default Header;
