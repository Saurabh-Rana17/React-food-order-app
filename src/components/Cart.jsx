import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ModalContext } from "../store/ModalContext";
import { OrderContext } from "../store/OrderContext";
import calculateTotal from "../utils/calulateTotal";
import Button from "./Button";

function Cart({ onClose }) {
  const { handleModal } = useContext(ModalContext);
  const { orderState } = useContext(OrderContext);
  const total = calculateTotal(orderState.orderArray);
  function handleCheckout() {
    if (total > 0) {
      handleModal();
    } else {
      alert("your cart is empty");
      onClose();
    }
  }
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
          {/* <button onClick={handleCheckout} className="button" type="button">
            Go to Checkout
          </button> */}
          {orderState.orderArray.length > 0 && (
            <Button onClick={handleCheckout} className="button" type="button">
              Go to Checkout
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
