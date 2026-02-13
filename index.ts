import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const API_KEY = "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";

const client = axios.create({
  baseURL: "https://rest.datshop.com.tr",
  timeout: 15000, // ⏱️ 5 saniye
  headers: {
    "x-socket-key": API_KEY
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/", async (req, res) => {
  try {
    const response = await client.get("/api/prices");
    res.json(response.data);
  } catch (err) {
    console.error("Datshop API error:", err.code, err.message);

    res.status(502).json({
      error: "Upstream API not responding",
      detail: err.code || err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
