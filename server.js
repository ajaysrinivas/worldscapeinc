var express = require("express");
var dotenv  = require('dotenv');
var proxy = require('express-http-proxy');
var app     = express();
var path = require("path");
dotenv.load();
console.log(process.env.API_PORT);

app.use('/app',express.static(__dirname + '/app'));
//Store all HTML files in view folder.
app.use('/assets',express.static(__dirname + '/assets'));
//Store all JS and CSS in Scripts folder.
app.use('/lib',express.static(__dirname + '/lib'));
app.use('/',express.static(__dirname ));

app.get('/',function(req,res){
  res.sendFile('index.html', { root : __dirname});
  //It will find and locate index.html from View or Scripts
});

app.use('/be', proxy('http://localhost:9000', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));


app.listen(3000);

console.log("Running at Port 3000");