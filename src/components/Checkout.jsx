import React, { useContext } from "react";
import { ModalContext } from "../store/ModalContext";
import { OrderContext } from "../store/OrderContext";

function Checkout({ onClose }) {
  const { handleSuccess } = useContext(ModalContext);
  const { handleDetails } = useContext(OrderContext);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    handleDetails(data);
    handleSuccess();
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : $89.95</p>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="email">E-mail Address</label>
          <input name="email" id="email" type="email" />
          <label htmlFor="street">Street</label>
          <input name="street" id="street" type="text" />
          <label htmlFor="postal">Postal Code</label>
          <input name="postal" id="postal" type="number" />
          <label htmlFor="city">City</label>
          <input name="city" id="city" type="text" />
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
