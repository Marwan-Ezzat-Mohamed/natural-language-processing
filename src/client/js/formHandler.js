const axios = require("axios");

async function handleSubmit(event) {
  event.preventDefault();
  const inputUrl = document.getElementById("url").value;
  if (Client.isUrlValid(inputUrl)) {
    try {
      const { data } = await axios.post("http://localhost:7071/api", {
        url: inputUrl,
      });
      setDataInHtml(data);
    } catch (error) {
      alert("An unxpected error ocuured please try again later");
    }
  } else {
    alert("Please enter a valid url");
  }
}

function setDataInHtml(data) {
  document.getElementById(
    "score_tag"
  ).innerHTML = `score_tag:  ${data.score_tag}`;
  document.getElementById(
    "agreement"
  ).innerHTML = `agreement: ${data.agreement}`;
  document.getElementById(
    "subjectivity"
  ).innerHTML = `subjectivity: ${data.subjectivity}`;
  document.getElementById(
    "confidence"
  ).innerHTML = `confidence: ${data.confidence}`;
  document.getElementById("irony").innerHTML = `irony: ${data.irony}`;
}

export { handleSubmit };
