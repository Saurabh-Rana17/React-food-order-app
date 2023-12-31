import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ModalContext } from "../store/ModalContext";

function Cart({ onClose }) {
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <div className="cart" method="dialog">
        <h2 className="">Your Cart</h2>
        <ul>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
        </ul>

        <p className="cart-total"> $73.96</p>
        <div className="modal-actions">
          <button onClick={onClose} className=" text-button">
            close
          </button>
          <button onClick={handleModal} className="button" type="button">
            Go to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
