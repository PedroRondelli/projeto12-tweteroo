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
    for (let i = numberOfTweets - 1; 0 <= i && i !== -1; i--) {
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
    for (
      let i = numberOfTweets - 1;
      numberOfTweets - 10 <= i && i !== -1;
      i--
    ) {
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
