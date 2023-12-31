import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ModalContext } from "../store/ModalContext";
import { OrderContext } from "../store/OrderContext";
import calculateTotal from "../utils/calulateTotal";

function Cart({ onClose }) {
  const { handleModal } = useContext(ModalContext);
  const { orderState } = useContext(OrderContext);
  const total = calculateTotal(orderState.orderArray);
  return (
    <>
      <div className="cart" method="dialog">
        <h2 className="">Your Cart</h2>
        <ul>
          {orderState.orderArray.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}
        </ul>

        <p className="cart-total"> ${total}</p>
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
