import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ API Key missing");
    process.exit(1);
}

console.log(`🔑 Testing API Key: ${API_KEY.substring(0, 10)}...`);

async function listModels() {
    console.log("⏳ Fetching available models via REST API...");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`❌ List Models Failed: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error("Response:", text);
            return;
        }

        const data = await response.json();
        console.log("✅ Models available:");
        const names = data.models.map(m => m.name.replace("models/", ""));
        console.log(names.join(", "));

        // Check if flash exists
        if (names.includes("gemini-1.5-flash")) {
            console.log("✅ gemini-1.5-flash IS available.");
        } else {
            console.warn("⚠️ gemini-1.5-flash is NOT in the list.");
        }

    } catch (error) {
        console.error("❌ Network Error listing models:", error);
    }
}

listModels();
