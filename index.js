import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Railway API çalışıyor 🚀");
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
