import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

/**
 * Translate text using Google Gemini API
 * @param {string} text
 * @param {string} sourceLang (ignored by Gemini usually, but kept for signature)
 * @param {string} targetLang (e.g., "en", "hi", "fr")
 * @returns {Promise<string>}
 */
export const translateText = async (text, sourceLang = "auto", targetLang = "en") => {
  if (!text || !targetLang) return text;

  try {
    const prompt = `Translate the following text to ${targetLang}. Return ONLY the translated text, no additional explanation or quotes.\n\nText: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translatedText = response.text().trim();

    // Cleanup quotes if Gemini adds them sometimes
    return translatedText.replace(/^"|"$/g, '');
  } catch (error) {
    console.error("Gemini Translation Error:", error);
    // Fallback: return original text so the app doesn't crash
    return `[Failed Translation]: ${text}`;
  }
};
