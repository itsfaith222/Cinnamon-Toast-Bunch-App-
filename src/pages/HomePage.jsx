import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate("/results")}>Go to Results</button>
    </div>
  );
}

export default HomePage;
