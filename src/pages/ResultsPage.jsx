import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; // Optional for additional styling



function ResultsPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState({ shirts: [], pants: [] });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
    if (storedFiles) setUploadedFiles(storedFiles);
  }, []);

  const outfitCombinations = uploadedFiles.shirts.flatMap((top) =>
    uploadedFiles.pants.map((bottom) => ({ top, bottom }))
  );

  const nextOutfit = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % outfitCombinations.length);
    setSelected(false);
  };

  const prevOutfit = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? outfitCombinations.length - 1 : prevIndex - 1
    );
    setSelected(false);
  };

  const select = () => {
    setSelected(true);
  };

  if (outfitCombinations.length === 0) return <p>No outfits uploaded. Go back and upload!</p>;

  return (
    <div className="results-container">
      <h1>Here are your outfit options! 👕👖</h1>
      <div className={`outfit-display ${selected ? 'magnify' : ''}`}>
        <div>
          <p><strong>Top:</strong></p>
          <img src={outfitCombinations[currentIndex].top} alt="Top" width="150" />
        </div>
        <div>
          <p><strong>Bottom:</strong></p>
          <img src={outfitCombinations[currentIndex].bottom} alt="Bottom" width="150" />
          <p>Here is where we can put the description of the generated outfit!</p>
          <p>Add a positive message to make the user feel confident like ex "this will look great on you"</p>
        </div>
        {selected && <p className="congrats">🎉 Congratulations on selecting an outfit! 🎉</p>}
      </div>
      <div className="button-container">
        <button style={{ margin: '10px' }} onClick={prevOutfit}>Previous</button>
        <button style={{ margin: '10px' , color: 'white' , backgroundColor: 'mediumseagreen'}} className="select-button" onClick={select}>Select</button>
        <button style={{ margin: '10px' }} onClick={nextOutfit}>Next</button>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ResultsPage;