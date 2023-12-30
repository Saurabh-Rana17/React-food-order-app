import React, { useEffect } from "react";
import Meal from "./Meal";

function MealSection() {
  useEffect(() => {
    async function fetchMeals() {
      fetch("http://localhost:3000/");
    }
    fetchMeals();
  }, []);
  return (
    <div id="meals">
      {/* MealSection */}
      <Meal />
      <Meal />
      <Meal />
      <Meal />
    </div>
  );
}

export default MealSection;
