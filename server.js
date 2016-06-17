//Setting up my server

var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
// ====================================================================
//                  --MIDDLEWARE---
// ====================================================================
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views')); //this tells express to access my .css and .js files (which is commonly placed in a folder called public)

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  //loading chokidar and webpack
  var chokidar = require('chokidar');
  var webpack = require('webpack');
  //referencing the dev
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  //running the middleware
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server'); //might need to change the name here ex. index
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}



// // ====================================================================
// //                 ---CONTROLS--
// // ====================================================================

// // ====================================================================
// //                 --ROUTES---
// // ====================================================================
app.get("/", function(req, res){
	res.render('index.html') //send and render work just as fine
});

app.get("/poop", function(req, res){
	res.render('404.html')
});

//set up on the port you want  if you don't you will get sent to 8080
app.listen(7000, function(){
	console.log("The magic happens on port 7000");
});