import React, { useContext } from "react";
import { ModalContext } from "../store/ModalContext";
import { OrderContext } from "../store/OrderContext";
import Input from "./Input";
import Button from "./Button";
import calculateTotal from "../utils/calulateTotal";

function Checkout({ onClose }) {
  const { handleSuccess } = useContext(ModalContext);
  const { handleDetails, orderState } = useContext(OrderContext);
  const total = calculateTotal(orderState.orderArray);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    handleDetails(data);
    handleSuccess();
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : ${total}</p>
        <div className="control">
          <Input id="name" lable="Full Name" type="text" />
          <Input id="email" lable="E-mail Address" type="email" />
          <Input id="street" lable="Street" type="text" />
          <Input id="postal-code" lable="Postal Code" type="number" />
          <Input id="city" lable="City" type="text" />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onClose}>
            close
          </button>
          {/* <button className="button">Submit Order</button> */}
          <Button className="button">Submit Order</Button>
        </div>
      </form>
    </>
  );
}

export default Checkout;
