var express = require('express');
var app = express();

app.all('/', function(req, res) {
    res.send("Hello World");
})

app.listen(3000, function()
    console.log("[/] Server started listening on port 3000");
})
