const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require(path.join(__dirname, "routes/apiRoutes.js"))(app);
require(path.join(__dirname, "routes/htmlRoutes.js"))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });