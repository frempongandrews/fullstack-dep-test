var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 4000;
var app = express();


app.use(express.static("public"));
app.get('/api', function (req, res) {
    res.send(["prova", "test", 4, 5]);
});


app.get("*", function (req, res) {
    res.sendFile(path.resolve(dirname__, "/public/index.html"));
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});