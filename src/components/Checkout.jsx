import React, { useContext } from "react";
import { ModalContext } from "../store/ModalContext";
import { OrderContext } from "../store/OrderContext";
import Input from "./Input";

function Checkout({ onClose }) {
  const { handleSuccess } = useContext(ModalContext);
  const { handleDetails } = useContext(OrderContext);

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
        <p>Total Amount : $89.95</p>
        <div className="control">
          <Input id="name" lable="Full Name" type="text" />
          <Input id="email" lable="E-mail Address" type="email" />
          <Input id="street" lable="Street" type="text" />
          <Input id="postal-code" lable="Postal Code" type="number" />
          <Input id="city" lable="City" type="text" />
          {/* 
          
          
          
          <label htmlFor="city">City</label>
          <input required name="city" id="city" type="text" /> */}
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onClose}>
            close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
      </form>
    </>
  );
}

export default Checkout;
