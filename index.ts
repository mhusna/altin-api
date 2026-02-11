// Use "type: module" in package.json to use ES modules
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const api_key = "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";
// Define your routes
app.get('/', async (request, response) => {
  // try {
  //   const res = await axios.get("https://rest.datshop.com.tr/api/prices", {
  //     headers: {
  //       "Authorization": `Bearer ${api_key}`
  //     }
  //   });

  //   console.log(res.status);
  //   console.log(res.data);
  //   response.json({ data: res.data });
  // } catch (error) {
  //   console.error('API Error:', error);
  //   response.status(500).json({ error: 'Failed to fetch data' });
  // }

  response.json({ message: "Hello World!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
// Export the Express app
export default app;