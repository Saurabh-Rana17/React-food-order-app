import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../store/OrderContext";

function Success({ onClose }) {
  const { orderState, clearOrder } = useContext(OrderContext);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    async function postOrder() {
      const order = {
        items: orderState.orderArray,
        customer: {
          ...orderState.userDetail,
        },
      };

      try {
        setSending(true);
        const res = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order }),
        });
        if (!res.ok) {
          throw new Error("failed to send data");
        }
        clearOrder();
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
      setSending(false);
    }
    postOrder();
    return () => {};
  }, []);

  if (error) {
    return (
      <>
        <h2>error sending data</h2>
        <div className="modal-actions">
          <button className="  button " onClick={onClose}>
            Okay
          </button>
        </div>
      </>
    );
  }
  if (sending) {
    return (
      <>
        <h2> submitting data.....</h2>
        <div className="modal-actions">
          <button className="  button " onClick={onClose}>
            Okay
          </button>
        </div>
      </>
    );
  }

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
