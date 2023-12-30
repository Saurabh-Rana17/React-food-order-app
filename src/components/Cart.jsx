import React from "react";
import CartItem from "./CartItem";

function Cart() {
  return (
    <>
      <form method="dialog">
        <p className="">Total amount</p>
        <CartItem />
        <CartItem />
        <CartItem />
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
