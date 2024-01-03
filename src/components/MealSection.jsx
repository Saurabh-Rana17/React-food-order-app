import React, { useEffect, useState } from "react";
import Meal from "./Meal";

function MealSection() {
  const [mealsArray, setMealsArray] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/meals");

        const data = await response.json();
        setMealsArray(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchMeals();
  }, []);
  return (
    <div id="meals">
      {isLoading && <p>loading data...</p>}
      {isError && <p>error fetching</p>}
      {!isError &&
        mealsArray.map((item) => {
          return (
            <Meal
              key={item.id}
              id={item.id}
              mealName={item.name}
              mealImg={`http://localhost:3000/${item.image}`}
              mealDescription={item.description}
              mealPrice={item.price}
            />
          );
        })}
    </div>
  );
}

export default MealSection;
