import { redirect } from "react-router-dom";

export const getTokenDuraiton = () => {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  const tokenDuraiton = getTokenDuraiton();

  if (!token) {
    return null;
  }

  if (tokenDuraiton < 0) {
    return "EXPIRED";
  }

  return token;
};

export const loader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return token;
};
