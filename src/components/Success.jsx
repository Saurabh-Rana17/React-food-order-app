import React, { useContext, useEffect } from "react";
import { OrderContext } from "../store/OrderContext";

function Success({ onClose }) {
  const { orderState } = useContext(OrderContext);
  useEffect(() => {
    async function postOrder() {
      const order = {
        items: orderState.orderArray,
        customer: {
          ...orderState.userDetail,
        },
      };
      console.log(order);
      const res = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order }),
      });
      console.log(res.status);
    }
    postOrder();
  }, [orderState]);

  return (
    <div>
      <h2>Success</h2>
      <p>Your order was submitted successfully </p>
      <p>
        We will get back to you with more details via email within next few
        minutes.
      </p>
      <div className="modal-actions">
        <button className="  button " onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
}

export default Success;
