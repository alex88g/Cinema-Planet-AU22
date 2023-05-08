import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Header = (props) => {
  const [error, setError] = useState(null);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      setError(error.message);
    }
  };

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
        <div>
          {props.name ? (
            <div>
              <h2>{`Welcome - ${props.name}`}</h2>
              <h1>
                {error && <div>{error}</div>}
                <btn onClick={handleSignOut}>Sign Out</btn>
              </h1>
            </div>
          ) : (
            <div>
              <h2>Login please</h2>
              <h1>
                <Link to="/login">Login</Link>
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="headerRight">
        <Link to="/cart">
          <img
            className="header__cartIcon"
            src="https://user-images.githubusercontent.com/113544188/236866391-56ce7702-7d4f-4b3b-8d58-f6725c68173f.png"
            alt="Cart"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;

