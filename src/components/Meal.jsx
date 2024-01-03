import React, { useContext } from "react";
import { OrderContext } from "../store/OrderContext";
import Button from "./Button";

function Meal({ mealName, mealPrice, mealDescription, mealImg, id }) {
  const { addToCart } = useContext(OrderContext);
  return (
    <div className="meal-item ">
      <img src={mealImg} alt="" />
      <h3>{mealName}</h3>
      <div className="meal-item-price">${mealPrice}</div>
      <div className="meal-item-actions">
        <p className="item-description">{mealDescription}</p>
        {/* <button
          onClick={() => addToCart(id, mealName, mealPrice)}
          className="button "
        >
          Add to Cart
        </button> */}
        <Button
          onClick={() => addToCart(id, mealName, mealPrice)}
          className="button"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Meal;
