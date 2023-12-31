import React, { useContext, useRef } from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";
import { createPortal } from "react-dom";
import Checkout from "./Checkout";
import { ModalContext } from "../store/ModalContext";

function Header() {
  const { modalState, openCart } = useContext(ModalContext);
  const modal = useRef();
  function handleClick() {
    modal.current.showModal();
    openCart();
  }
  function handleClose() {
    modal.current.close();
    openCart();
  }
  return (
    <>
      {createPortal(
        <dialog className="modal " ref={modal}>
          {modalState ? (
            <Checkout onClose={handleClose} />
          ) : (
            <Cart onClose={handleClose} />
          )}
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
