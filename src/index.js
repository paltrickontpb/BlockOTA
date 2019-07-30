var express = require('express');
var app = express();
var path = require('path');

app.use('/',express.static(path.join(__dirname, 'www')));
app.use(express.static('css'));
app.use(express.static('fonts'));
app.use(express.static('images'));
app.use(express.static('js'));
app.use(express.static('vendor'));


app.listen(3000, () => {
    console.log("Server Started on port 3000");
});