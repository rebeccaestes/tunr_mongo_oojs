var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

app.get("/", function(req, res){
  res.render("index.html");
});

app.use("/artists", require("./controllers/artists"));
app.use("/songs", require("./controllers/songs"));

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
