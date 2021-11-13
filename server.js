require("dotenv").config();

const express = require("express");
const clothes = require("./routes/clothes");
const auth = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/api/clothes", clothes);
app.use("/api/auth", auth);

const port = 8080;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => console.log("Connected to database"));
app.get("/", (req, res) => {
  console.log(req.body);
});

app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on https://localhost:${port}`);
  console.log("Trying to connect to database...");
});
