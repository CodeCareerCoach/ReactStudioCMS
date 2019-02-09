const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./routes")(app, {});

app.listen(8000, () => {
  console.log("Hello NodeJS");
});
