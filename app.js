var express = require("express");
var app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 5000);

app.get("/", (request, response) => {
  response.render("dashboard");
});

app.get("/price", (request, response) => {
  response.render("priceOdometer");
});

app.get("/time", (request, response) => {
  response.render("timeOdometer");
});

app.get("/meter", (request, response) => {
  response.render("circleMeter");
});

app.get("/data", function(req, res) {
  fs.readFile("data.csv", "utf8", function(err, data) {
    res.send(data);
  });
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
