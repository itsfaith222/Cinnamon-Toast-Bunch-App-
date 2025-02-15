import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ResultsPage() {
  const navigate = useNavigate();

  
  const outfitCombinations = [
    { top: "Blue T-Shirt", bottom: "Black Jeans" },
    { top: "White Shirt", bottom: "Khaki Pants" },
    { top: "Red Sweater", bottom: "Blue Jeans" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextOutfit = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % outfitCombinations.length);
  };

  const prevOutfit = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? outfitCombinations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="results-container">
      <h1>Here are your outfit options! 👕👖</h1>
      <div className="outfit-display">
        <p><strong>Top:</strong></p> 
        <p> {outfitCombinations[currentIndex].top}</p>
        <p><strong>Bottom:</strong></p> 
        <p> {outfitCombinations[currentIndex].bottom}</p>
      </div>
      <div className="button-container">
        <button style={{ margin: '10px' }} onClick={prevOutfit}>Previous</button>
        <button style={{ margin: '10px' }} onClick={nextOutfit}>Next</button>
      </div>
      <button style={{ margin: '10px' }} onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ResultsPage;