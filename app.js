const express = require("express");
const bodyParser = require("body-parser");

const downloadRoute = require("./routes/download");

const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.use("/download", downloadRoute);

app.listen(PORT, () => {
  console.log("inTunes API server running on localhost:" + PORT);
});
