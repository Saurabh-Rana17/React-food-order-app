import { useEffect, useState } from "react";

export default function useFetch() {
  const [mealsArray, setMealsArray] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (response.ok) {
          const data = await response.json();
          setMealsArray(data);
        } else {
          throw new Error("failed", response.status);
        }
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
      setIsLoading(false);
    }

    fetchMeals();
  }, []);
  return {
    mealsArray,
    isError,
    isLoading,
  };
}
