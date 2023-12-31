import React, { useEffect, useState } from "react";
import Meal from "./Meal";

function MealSection() {
  const [mealsArray, setMealsArray] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      setMealsArray(data);
    }
    fetchMeals();
  }, []);
  return (
    <div id="meals">
      {mealsArray.map((item) => {
        return (
          <Meal
            key={item.id}
            id={item.id}
            mealName={item.name}
            mealImg={`http://localhost:3000/${item.image}`}
            mealDescription={item.description}
            mealPrice={new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.price)}
          />
        );
      })}
    </div>
  );
}

export default MealSection;
