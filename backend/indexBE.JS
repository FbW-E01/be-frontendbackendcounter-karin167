import express from "express";
import cors from "cors";
let num = 0;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(num.toString());
});

app.post("/", (req, res) => {
  num = num + 1;
  res.send(num.toString());
});

app.listen(3332);
