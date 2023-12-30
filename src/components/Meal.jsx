import React from "react";

function Meal() {
  return (
    <div className="meal-item ">
      <img src="" alt="" />
      <h3>Mac & cheese</h3>
      <div className="meal-item-price">$8.99</div>
      <p className="item-description">
        Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with
        crispy breadcrumbs. A classic comfort food.
      </p>
      <div className="meal-item-actions">
        <button className="button meal-item-action">Add to Cart</button>
      </div>
    </div>
  );
}

export default Meal;
