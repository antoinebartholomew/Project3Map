var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
  mongoose = require('mongoose'),
  Polygon = require('./polygonModel'), //created model loading here
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
  mongoose.Promise = global.Promise;

  /////////////////////////////////////////////////
  mongoose.connect('mongodb://localhost/Project3Database');
  ////////////////////////////////////////////////
  var db = mongoose.connect;

  app.get('/', function (req, res) {
    res.send("test")
  });




  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./polygonRoutes'); //importing route
  routes(app); //register the route


  app.listen(port);


  console.log('todo list RESTful API server started on: ' + port);
