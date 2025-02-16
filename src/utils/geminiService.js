import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDryFzh_-XisK8elVeOb-_igoLjP-WMq0g");

export async function generateOutfitDescription(shirtTags, pantsTags) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
  I am building a fashion outfit generator. Based on the given clothing tags, 
  generate a short, stylish outfit description.

  Shirt Tags: ${shirtTags.join(", ")}
  Pants Tags: ${pantsTags.join(", ")}

  Provide a one-sentence recommendation that sounds like a fashion stylist wrote it.
  Example:
  - "This black streetwear hoodie pairs perfectly with distressed jeans and sneakers for an urban-casual look."
  - "A classic white button-down with navy dress pants makes for a timeless, elegant outfit."
  `;

  try {
    const response = await model.generateContent(prompt);
    return response.text(); // Returns the AI-generated outfit description
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "This outfit is a great match!";
  }
}
