import React from "react";
import CartItem from "./CartItem";

function Cart() {
  return (
    <>
      <form className="cart" method="dialog">
        <h2 className="">Your Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <p className="cart-total"> $73.96</p>
        <div className="modal-actions">
          <button className=" text-button">close</button>
          <button className="button" type="button">
            Go to Checkout
          </button>
        </div>
      </form>
    </>
  );
}

export default Cart;
