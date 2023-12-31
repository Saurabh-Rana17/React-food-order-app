import React, { useContext } from "react";
import { OrderContext } from "../store/OrderContext";

function CartItem({ id, name, quantity, price }) {
  const { increaseQuantity, decreaseQuantity } = useContext(OrderContext);
  return (
    <>
      <li key={id}>
        <div className="cart-item">
          <p>
            {name} - {quantity} x {price}
          </p>
          <div className="cart-item-actions">
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <button> {quantity} </button>
            <button onClick={() => increaseQuantity(id)}>+</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
