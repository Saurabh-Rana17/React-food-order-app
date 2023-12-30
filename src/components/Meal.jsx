import React from "react";

function Meal({ mealName, mealPrice, mealDescription, mealImg }) {
  return (
    <div className="meal-item ">
      <img src={mealImg} alt="" />
      <h3>{mealName}</h3>
      <div className="meal-item-price">{mealPrice}</div>
      <p className="item-description">{mealDescription}</p>
      <div className="meal-item-actions">
        <button className="button meal-item-action">Add to Cart</button>
      </div>
    </div>
  );
}

export default Meal;
