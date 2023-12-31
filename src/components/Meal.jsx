import React, { useContext } from "react";
import { OrderContext } from "../store/OrderContext";

function Meal({ mealName, mealPrice, mealDescription, mealImg, id }) {
  // mealPrice = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // }).format(mealPrice);
  const { addToCart } = useContext(OrderContext);
  return (
    <div className="meal-item ">
      <img src={mealImg} alt="" />
      <h3>{mealName}</h3>
      <div className="meal-item-price">${mealPrice}</div>
      <div className="meal-item-actions">
        <p className="item-description">{mealDescription}</p>
        <button
          onClick={() => addToCart(id, mealName, mealPrice)}
          className="button "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Meal;
