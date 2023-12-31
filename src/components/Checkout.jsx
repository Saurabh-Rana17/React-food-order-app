import React, { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

function Checkout({ onClose }) {
  const { handleSuccess } = useContext(ModalContext);
  return (
    <>
      <form method="dialog">
        <h2>Checkout</h2>
        <p>Total Amount : $89.95</p>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" />
          <label htmlFor="email">E-mail Address</label>
          <input id="email" type="email" />
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
          <label htmlFor="postal">Postal Code</label>
          <input id="postal" type="number" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onClose}>
            close
          </button>
          <button onClick={handleSuccess} type="button" className="button">
            Submit Order
          </button>
        </div>
      </form>
    </>
  );
}

export default Checkout;
