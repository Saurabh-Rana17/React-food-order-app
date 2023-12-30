import React from "react";

function Meal({ mealName, mealPrice, mealDescription, mealImg }) {
  return (
    <div className="meal-item ">
      <img src={mealImg} alt="" />
      <h3>{mealName}</h3>
      <div className="meal-item-price">{mealPrice}</div>
      <div className="meal-item-actions">
        <p className="item-description">{mealDescription}</p>
        <button className="button ">Add to Cart</button>
      </div>
    </div>
  );
}

export default Meal;
