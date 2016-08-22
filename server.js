var express = require("express");
// var dotenv  = require('dotenv');
var proxy = require('express-http-proxy');
var app     = express();
var path = require("path");
app.engine('html', require('ejs').renderFile)
// dotenv.load();
// console.log(process.env.API_PORT);

app.use('/app',express.static(__dirname + '/app'));
//Store all HTML files in view folder.
app.use('/assets',express.static(__dirname + '/assets'));
//Store all JS and CSS in Scripts folder.
app.use('/lib',express.static(__dirname + '/lib'));
app.use('/',express.static(__dirname ));

app.get('/',function(req,res){
  res.render('index.html', { root : __dirname});
  //It will find and locate index.html from View or Scripts
});


app.listen(5000);

console.log("WorldScape Inc. running at Port 5000");