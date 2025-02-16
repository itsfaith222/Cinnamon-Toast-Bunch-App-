import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadForm from "../components/UploadForm";

function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({ tops: [], bottoms: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
    navigate("/results");
  };

  const handleUpload = (category, fileURLs) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [category]: fileURLs,
    }));
  };

  return (
    <div>
      <h2>Welcome To Fit Roulette!</h2>
      <img src="/shiny_glock.jpeg" alt="HomePage_Picture" width="400"  />
      <p>Scroll to get started!</p>
      <br></br><br></br><br></br><br></br>
      <form onSubmit={handleSubmit}>
        <h3>Enter Your Name</h3>
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <UploadForm category="tops" onUpload={handleUpload} />
        <UploadForm category="bottoms" onUpload={handleUpload} />
        <button type="submit">Results</button>
      </form>
    </div>
  );
}

export default HomePage;