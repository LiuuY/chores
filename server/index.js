const express = require("express");
const path = require("path");
const shrinkRay = require("shrink-ray-current");

const app = express();

app.use(shrinkRay());

app.use(express.static(path.join(__dirname, "/../client-build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client-build/index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log("APP is listening on port " + port);
