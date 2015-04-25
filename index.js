var express = require('express');
var app = express();

app.use(express.static('src/public'));

app.listen(process.env.PORT || 8080);