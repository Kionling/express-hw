const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));

// require(path.join(__dirname, "routes/apiRoutes.js"))(app);
require(path.join(__dirname, "routes/htmlRoutes.js"))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });