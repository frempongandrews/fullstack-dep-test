var express = require("express");
var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.static("public"));
app.set("view-engine", "pug");
app.get('/api', function (req, res) {
    res.send(["prova", "test", 4, 5]);
});


app.get("/", function (req, res) {
    res.render("index.pug");
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});