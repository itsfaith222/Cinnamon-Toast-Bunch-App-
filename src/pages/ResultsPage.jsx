import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ResultsPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState({ tops: [], bottoms: [] });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);

    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
    if (storedFiles) setUploadedFiles(storedFiles);
  }, []);

  const outfitCombinations = uploadedFiles.tops.flatMap((top) =>
    uploadedFiles.bottoms.map((bottom) => ({ top, bottom }))
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

  if (outfitCombinations.length === 0) {
    return <p>No outfits uploaded. Go back and upload some!</p>;
  }

  return (
    <div className="results-container">
      <h1>Here are your outfit options, {userName}! 👕👖</h1>
      <div className={`outfit-display ${selected ? "magnify" : ""}`}>
        <div>
          <p>
            <strong>Top:</strong>
          </p>
          <img src={outfitCombinations[currentIndex].top} alt="Top" width="150" />
        </div>
        <div>
          <p>
            <strong>Bottom:</strong>
          </p>
          <img
            src={outfitCombinations[currentIndex].bottom}
            alt="Bottom"
            width="150"
          />

          <p>
            <strong>Pro-tip:</strong> Accessorize this outfit to make it more <i>you</i>.🌺
          </p>
        </div>
        {selected && <p className="congrats">🎉 Congratulations on selecting an outfit! 🎉</p>}
      </div>
      <div className="button-container">
        <button style={{ margin: "10px" }} onClick={prevOutfit}>
          Previous
        </button>
        <button
          style={{ margin: "10px", color: "white", backgroundColor: "mediumseagreen" }}
          className="select-button"
          onClick={select}
        >
          Select
        </button>
        <button style={{ margin: "10px" }} onClick={nextOutfit}>
          Next
        </button>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ResultsPage;
