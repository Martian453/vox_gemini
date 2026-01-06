import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

console.log("🔑 Checking API Key...");
if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing in .env");
    process.exit(1);
} else {
    console.log("✅ API Key found (starts with):", process.env.GEMINI_API_KEY.substring(0, 5) + "...");
}

console.log("⏳ Initializing Gemini...");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function testTranslation() {
    const text = "Hello world";
    const targetLang = "es";

    console.log(`⏳ Attempting prediction: "${text}" -> ${targetLang}`);

    try {
        const prompt = `Translate the following text to ${targetLang}. Return ONLY the translated text.\n\nText: "${text}"`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const translatedText = response.text();

        console.log("✅ Translation Success!");
        console.log("Original:", text);
        console.log("Translated:", translatedText);
    } catch (error) {
        console.error("❌ Translation Failed:", error);
    }
}

testTranslation();
