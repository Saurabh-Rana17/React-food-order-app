import React from "react";

function CartItem() {
  return (
    <>
      <div className="cart-item">
        <p>sushi roll platter - 2 x $19.99</p>
        <div className="cart-item-actions">
          <button>-</button>
          <button>2</button>
          <button>+</button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
