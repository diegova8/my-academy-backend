const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/my-academy-db");

app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
