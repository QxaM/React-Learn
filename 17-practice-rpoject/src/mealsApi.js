export const getAllMeals = async () => {
  const response = await fetch(`http://localhost:3000/meals`);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      responseData.message || "Failed to fetch meals data from server!"
    );
  }

  return responseData;
};

export const createOrder = async (order) => {
  const response = await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      responseData.message || "Failed to create order on the server"
    );
  }

  return responseData;
};
