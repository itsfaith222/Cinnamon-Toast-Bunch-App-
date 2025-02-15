import { useState } from "react";

function UploadForm({ category, onUpload }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    onUpload(category, selectedFiles);
  };

  return (
    <div>
      <h3>Upload {category}</h3>
      <input type="file" multiple accept="image/*" onChange={handleFileChange} />
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UploadForm;
