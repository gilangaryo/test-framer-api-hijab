const express = require("express");
const cors = require("cors");
const hijabProducts = require("./data/products.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(hijabProducts);
});

app.listen(PORT, () => {
  console.log(`Hijab API running on http://localhost:${PORT}`);
});
