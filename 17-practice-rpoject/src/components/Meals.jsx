import React, { useState, useEffect } from "react";
import { getAllMeals } from "../mealsApi";
import MealItem from "./MealItem";

const Meals = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const meals = await getAllMeals();
        setMealsData(meals);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch meals data" });
      }
      setIsFetching(false);
    };
    fetchData();
  }, []);

  return (
    <ul id="meals">
      {isFetching && <p>Fetching meals data...</p>}
      {!isFetching &&
        mealsData.map((meal) => (
          <MealItem
            key={meal.id}
            title={meal.name}
            image={meal.image}
            price={meal.price}
            description={meal.description}
          />
        ))}
    </ul>
  );
};

export default Meals;
