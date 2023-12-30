import React from "react";

function Checkout({ onClose }) {
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
          {/* <div className=" control control-row"> */}
          <label htmlFor="postal">Postal Code</label>
          <input id="postal" type="number" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          {/* </div> */}
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onClose}>
            close
          </button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </>
  );
}

export default Checkout;
