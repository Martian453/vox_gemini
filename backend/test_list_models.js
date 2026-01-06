import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ API Key missing");
    process.exit(1);
}

async function listModels() {
    console.log("⏳ Fetching FULL model list...");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`❌ Request Failed: ${response.status}`);
            return;
        }

        const data = await response.json();
        const names = data.models.map(m => m.name.replace("models/", ""));
        console.log("--------------------------------------------------");
        console.log(names.join("\n"));
        console.log("--------------------------------------------------");

    } catch (error) {
        console.error("❌ Network Error:", error);
    }
}

listModels();
