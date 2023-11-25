import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://st4.depositphotos.com/12678588/23473/v/450/depositphotos_234736640-stock-illustration-food-logo-smile-label-food.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
