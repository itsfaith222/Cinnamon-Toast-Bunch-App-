import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
  apiKey: "05884ffcad884e799b4b02f9cd717d83" 
});

// Function to analyze an image and extract fashion tags
export async function analyzeImage(imageFile) {
  const base64Image = await convertToBase64(imageFile);
  const MODEL_ID = "e0be3b9d6a454f0493ac3a30784001ff"; // Apparel Model

  try {
    const response = await clarifaiApp.models.predict(MODEL_ID, { base64: base64Image });
    const tags = response.outputs[0].data.concepts
      .filter(tag => tag.value > 0.7) // Only keep highly confident tags
      .map(tag => tag.name);

    return tags; // Returns an array of tags (e.g., ["Blue", "Casual", "Denim"])
  } catch (error) {
    console.error("Clarifai Error:", error);
    return [];
  }
}

// Helper function: Convert image file to Base64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
  });
}
