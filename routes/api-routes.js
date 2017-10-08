const db = require('../models'),
	  bodyParser = require('body-parser'),
	  $ = require('jquery');


//import express and express router
const express = require('express'),
	  router = express.Router();

//import controllers
const apiGetController = require('../controllers/apiGetController'),
	  apiPostController = require('../controllers/apiPostController'),
	  apiPutController = require('../controllers/apiPutController'),
	  apiDeleteController = require('../controllers/apiDeleteController');

//Routing Catalog
module.exports = function(app) {

	//calls the appropriate function from the apiGetController
	app.get("/api/", function(req, res){

		let action = req.body.action;

		apiGetController[action](req).then(function(results){
        	res.json(results);
      	});

	});

	app.post("/api/", function(req, res){

		let action = req.body.action;

		apiPostController[action](req).then(function(results){
       		res.json(results);
      	});

	});

	app.put("/api/", function(req, res){

		let action = req.body.action;

		apiPutController[action](req).then(function(results){
        	res.json(results);
      	});

	})

	app.delete("/api", function(req, res){

		let action = req.body.action;

		apiDeleteController[action](req).then(function(results){
        	res.json(results);
      	});

	});
}