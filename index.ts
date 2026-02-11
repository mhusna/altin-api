// Use "type: module" in package.json to use ES modules
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
 
// Define your routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});
 
// Export the Express app
export default app;