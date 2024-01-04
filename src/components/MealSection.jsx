import React from "react";
import Meal from "./Meal";
import useFetch from "../utils/useFetch";

function MealSection() {
  const { isError, isLoading, mealsArray } = useFetch();
  return (
    <ul id="meals">
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
    </ul>
  );
}

export default MealSection;
