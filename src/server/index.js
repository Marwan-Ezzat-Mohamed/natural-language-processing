const path = require("path");
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.listen(7071, function () {
  console.log(" listening on port 7071!");
});

app.post("/api", async (req, res) => {
  try {
    const url = req.body.url;
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;
    const { data } = await axios.post(apiUrl);
    const result = {
      irony: data.irony,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      score_tag: data.score_tag,
    };
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});
