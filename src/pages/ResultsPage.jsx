import { useNavigate } from "react-router-dom";

function ResultsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Here are your outfit options! 👕👖</h1>
      <p>We found some outfit combinations for you.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ResultsPage;
