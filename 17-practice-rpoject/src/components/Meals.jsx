import React, { useEffect } from "react";
import { getAllMeals } from "../mealsApi";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const Meals = () => {
  const { data, isFetching, error, sendRequest } = useHttp([]);

  useEffect(() => {
    const fetchMeals = async () => {
      await sendRequest(getAllMeals);
    };
    fetchMeals();
  }, []);

  if (error) {
    return <Error title="Failed to fetch meals data" message={error} />;
  }

  return (
    <ul id="meals">
      {isFetching && <p className="center">Fetching meals data...</p>}
      {!isFetching &&
        data.map((meal) => (
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
