import axios from "axios";
import express from "express";
import cors from "cors";

const users = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o vasco",
  },
  {
    username: "bobesponja",
    tweet: "eu sou da GDA",
  },
  {
    username: "bobesponja",
    tweet: "o vasco é minha vida",
  },
];

const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000);

app.post("/sign-up", (req, res) => {
  users.push(req.body);
  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  res.send("Ok");
});

app.get("/tweets", (req, res) => {
  const numberOfTweets = tweets.length;
  const lastTweets = [];
  if (numberOfTweets <= 10) {
    for (let i = 0; numberOfTweets > i; i++) {
      const { username, tweet } = tweets[i];
      const tweetOwner = users.find((user) => user.username === username);
      lastTweets.push({
        username,
        avatar: tweetOwner.avatar,
        tweet,
      });
    }
    return res.send(lastTweets);
  } else {
    for (let i = 0; 10 > i; i++) {
      const { username, tweet } = tweets[i];
      const tweetOwner = users.find((user) => user.username === username);
      lastTweets.push({
        username,
        avatar: tweetOwner.avatar,
        tweet,
      });
    }
    return res.send(lastTweets);
  }
});

console.log("Rodando ... ");
