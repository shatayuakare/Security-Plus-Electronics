import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
// Initialize Gemini client lazily
let aiClient = null;
function getGeminiClient() {
    if (!aiClient) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.warn("WARNING: GEMINI_API_KEY is not defined in the environment.");
        }
        aiClient = new GoogleGenAI({
            apiKey: apiKey || "MOCK_KEY",
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                },
            },
        });
    }
    return aiClient;
}
// API Route for AI Assistant chat
app.post("/api/chat", async (req, res) => {
    try {
        const { messages } = req.body;
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: "Invalid or missing messages array." });
        }
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            // Graceful fallback for local development or when the secret hasn't been set yet
            return res.json({
                text: "Hello! I am your Security Plus AI Assistant. It looks like the Gemini API Key is not configured yet in the Secrets tab, so I am running in offline demonstration mode. I can still tell you that Security Plus Electronics is Central India's biggest CCTV Mall located in Nagpur, offering enterprise-grade security solutions for Residential, Commercial, Healthcare, Banking, and Industrial sectors! Please configure the API Key in the Secrets panel to unlock real-time intelligence."
            });
        }
        const ai = getGeminiClient();
        // Map message history for the Gemini SDK chat
        const systemInstruction = `You are "SPE Sentinel", an elite, highly knowledgeable AI Security Consultant for "Security Plus Electronics" (SPE), Central India's largest and most trusted CCTV and enterprise security mall located in Nagpur, Maharashtra.
SPE has over 20 years of excellence, partners with 40+ premium brands, and has over 5,000 happy customers.

Your tone is professional, confident, reassuring, and technically precise. Speak clearly and helpfully.
SPE offers complete security, networking, and technology solutions including:
1. CCTV Cameras (IP, Analog, Dome, Bullet, PTZ, 1080p, 4K, ColorVu, thermal)
2. AI Cameras (Facial recognition, automatic vehicle counting, intrusion detection, crowd density mapping, boundary crossing alerts)
3. Networking Products (Enterprise switches, optical fiber networks, secure routers, rack servers, wireless bridges, Wi-Fi 6 access points)
4. Power Backup (Industrial UPS systems, smart battery banks, solar integration for security rigs, uninterrupted power grids)
5. Smart Locks (Biometric entry, RFID access systems, cloud security locks, electronic safes, turnstiles, video door phones)

When asked technical questions, give clear, robust answers. Help users with calculations (e.g. CCTV counts, bandwidth, DVR/NVR channels, storage sizing).
Sectors We Protect:
- Residential: Home CCTV, smart locks, video door phones, wire-free surveillance.
- Commercial: Retail analytics, office multi-point access control, fire-alarm integration, attendance tracking.
- Healthcare: Patient monitoring feeds, restricted ward security, silent alerts, ambulance area speed cams.
- Banking: Vault high-definition dual-cam grids, biometric vault access, cash transit GPS-linked cams, anti-skimming alarms.
- Industrial: Thermal surveillance for overheating machines, warehouse motion tripwires, worker helmet detection, automated shipping bay gates.

Make sure to recommend them to visit the massive SPE showroom in Nagpur for a live demonstration of these active systems, or invite them to request a tailored quote. Keep your responses organized, readable, and highly engaging!`;
        const formattedContents = messages.map(msg => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }]
        }));
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: formattedContents,
            config: {
                systemInstruction,
                temperature: 0.7,
            }
        });
        res.json({ text: response.text });
    }
    catch (error) {
        console.error("Gemini API error:", error);
        res.status(500).json({ error: error.message || "An error occurred during Gemini processing." });
    }
});
// App server startup
async function startServer() {
    if (process.env.NODE_ENV !== "production") {
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    }
    else {
        const distPath = path.join(process.cwd(), "dist");
        app.use(express.static(distPath));
        app.get("*", (req, res) => {
            res.sendFile(path.join(distPath, "index.html"));
        });
    }
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running at http://0.0.0.0:${PORT}`);
    });
}
startServer();
