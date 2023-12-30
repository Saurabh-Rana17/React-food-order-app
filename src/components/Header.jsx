import React, { useRef } from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";

function Header() {
  const modal = useRef();
  function handleClick() {
    modal.current.showModal();
  }
  return (
    <>
      <dialog ref={modal}>
        <Cart />
      </dialog>
      <div id="main-header">
        <h1 id="title">
          <img src={logo} alt="logo" />
          REACTFOOD
        </h1>
        <button onClick={handleClick} className="text-button">
          Cart(3)
        </button>
      </div>
    </>
  );
}

export default Header;
