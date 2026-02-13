// Use "type: module" in package.json to use ES modules
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const api_key = "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";
// Define your routes
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://rest.datshop.com.tr/api/prices",
      {
        timeout: 5000,
        headers: {
          Authorization: `Bearer ${api_key}`,
        },
      }
    );

    res.json(result.data);
  } catch (err) {
    console.error(err.code || err.message);

    res.status(502).json({
      error: "Upstream API not responding",
      detail: err.code,
    });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
// Export the Express app
export default app;