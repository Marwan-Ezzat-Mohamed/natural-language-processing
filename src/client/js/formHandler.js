const axios = require("axios");

async function handleSubmit(event) {
  event.preventDefault();

  const url = document.getElementById("url").value;

  //   console.log("here:  ");
  if (Client.isUrlValid(url)) {
    const { data } = await axios.post("http://localhost:8081/api", {
      url,
    });
    if (data.noData) return alert("no data in this link");

    document.getElementById("score_tag").innerHTML =
      "score_tag: " + data.score_tag;
    document.getElementById("agreement").innerHTML =
      "agreement: " + data.agreement;
    document.getElementById("subjectivity").innerHTML =
      "subjectivity: " + data.subjectivity;
    document.getElementById("confidence").innerHTML =
      "confidence: " + data.confidence;
    document.getElementById("irony").innerHTML = "irony: " + data.irony;
  } else {
    alert("please enter a valid url");
  }
}

export { handleSubmit };
