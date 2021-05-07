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

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  //console.log(process.env.API_KEY);
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/api", async (req, res) => {
  try {
    const url = req.body.url;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`;
    const { data } = await axios.post(apiUrl);

    if (!data.sentence_list) {
      return res.send({ noData: true });
    }
    const toSend = {
      score_tag: data.score_tag,
      confidence: data.confidence,
      irony: data.irony,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
    };
    res.send(toSend);
  } catch (error) {
    console.log(error.message);
  }
});
