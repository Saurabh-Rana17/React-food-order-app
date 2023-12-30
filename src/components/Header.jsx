import React, { useRef } from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";
import { createPortal } from "react-dom";

function Header() {
  const modal = useRef();
  function handleClick() {
    modal.current.showModal();
  }
  function handleClose() {
    modal.current.close();
  }
  return (
    <>
      {createPortal(
        <dialog className="modal " ref={modal}>
          <Cart onClose={handleClose} />
        </dialog>,
        document.getElementById("modal")
      )}
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
