var express = require("express");
var app = express();
var PORT = 4000;

app.use(express.static("public"));
app.set("view-engine", "pug");

app.get("/", function (req, res) {
    res.render("index.pug");
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});