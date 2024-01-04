import React, { useContext } from "react";
import { OrderContext } from "../store/OrderContext";
import Button from "./Button";

function Meal({ mealName, mealPrice, mealDescription, mealImg, id }) {
  const { addToCart } = useContext(OrderContext);
  return (
    <li className="meal-item ">
      <article>
        <img src={mealImg} alt={mealName} />
        <div>
          <h3>{mealName}</h3>
          <p className="meal-item-price">${mealPrice}</p>
          <p className="item-description">{mealDescription}</p>
        </div>
        <p className="meal-item-actions">
          <Button
            className="button"
            onClick={() => addToCart(id, mealName, mealPrice)}
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}

export default Meal;
