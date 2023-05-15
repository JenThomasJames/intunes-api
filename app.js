const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("inTunes API server running on localhost:" + PORT);
});
