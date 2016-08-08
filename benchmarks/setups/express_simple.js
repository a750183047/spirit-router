// lifted from Express Getting Started page
var express = require('express');
var app = express();

app.set("etag", false);

app.get("/", function (req, res) {
  res.send('Hello World');
});

app.listen(3009);
