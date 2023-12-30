import React from "react";
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <div id="main-header">
      <h1 id="title">
        <img src={logo} alt="logo" />
        REACTFOOD
      </h1>
      <button className="text-button">Cart(3)</button>
    </div>
  );
}

export default Header;
