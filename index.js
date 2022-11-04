import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000);

app.get("/here", (req, res) => {
  res.send("Hello!!");
});

console.log("Rodando ... ");
