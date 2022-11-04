import axios from "axios";
import express from "express";
import cors from "cors";

const users = [];

const tweets = [];

const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000);

app.post("/sign-up", (req, res) => {
  console.log("Ok");
  console.log(req.body);
  users.push(req.body);
  console.log(users);
  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  console.log("Ok");
  console.log(req.body);
  tweets.push(req.body);
  console.log(tweets);
  res.send("Ok");
});

console.log("Rodando ... ");
