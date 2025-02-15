import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadForm from "../components/UploadForm"; // Import the UploadForm component

function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({ shirts: [], pants: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
    navigate("/results");
  };

  const handleUpload = (category, files) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [category]: files.map((file) => file.name),
    }));
  };

  return (
    <div>
      <h2>Welcome To the Outfit Styler App!</h2>
      
      {/*A big picture to take up some space*/}
      <img src="/Yellow_Flower.jpg" alt="HomePage_Picture" width="400" /><br></br>

      {/*message to let user know to scroll */}
      <p>Scroll to get started!</p>

      <hr/>

      {/*Input form */}
      <div>
        <form>
            <h3>Enter Your Name</h3>
            <input type="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            
            {/* Upload Forms */}
          <UploadForm category="shirts" onUpload={handleUpload} />
          <UploadForm category="pants" onUpload={handleUpload} />
          
          <button type="submit" onClick={() => navigate("/results")}>Results</button>
        </form>

      </div>



      </div>
      
  );
}


export default HomePage;
