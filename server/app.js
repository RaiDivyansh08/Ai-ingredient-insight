const express = require("express");
const cors = require("cors");

const scanRoutes = require("./routes/scanRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", scanRoutes);

app.get("/", (req, res) => {
  res.send("IngredientInsight Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});