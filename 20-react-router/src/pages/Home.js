import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="/products">list of products</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </div>
  );
};

export default HomePage;
