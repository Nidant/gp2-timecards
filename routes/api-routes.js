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

		let action = req.query.action;

		apiGetController[action](req, res);

	});

	app.post("/api/", function(req, res){
			
		let action = req.body.action;

		apiPostController[action](req, res);

	});

	app.put("/api/", function(req, res){
		console.log("made it to api put route");
		console.log(req.body);
		let action = req.body.action;

		apiPutController[action](req, res);

	})

	app.delete("/api", function(req, res){

		let action = req.body.action;

		apiDeleteController[action](req, res);

	});
}
