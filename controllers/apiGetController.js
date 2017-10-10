const db = require('../models');

// -- Time punch (type, name, startDate, endDate) type = Company, Users, Team  => {startTime, endTime, Type}
	
	//Users
	exports.usersTimePunch = function (req, res){

		var start = res.body.start,
		    end = res.body.end,
		    email = res.body.email;

		db.Punchs.findAll({
			group['startDate'],
			attributes: ['startDate','startTime', 'stopDate', 'stopTime'],
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 email: email,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//Users
	exports.usersInfo = function (req, res){

		var email = res.body.email;

		db.Punchs.findAll({
			attributes: ['fName', 'company'],,
			where: {
				 email: email,
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//team
	exports.teamTimePunch = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    team = res.body.team;

		db.Punchs.findAll({
			group: ['email'],
			attributes: ['start', 'stop', 'note'],
			include: [{
				model: Users,
				required: true,
				attributes: [fName, lName]
			}],
			where: {
				 team: team,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//company
	exports.companyTimePunch = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    company = res.body.company;

		db.Punchs.findAll({
			attributes: ['start', 'stop', 'note'],
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 company: company,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};


// C
// -- Total hours (type, name, startDate, endDate) type = Company, Users, Team => total Hours (OverTime, Normal, Holiday, Sick)

	//Users
	exports.UsersTotalTime = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    email = res.body.email;

		db.Punchs.findAll({
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 email: email,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//team
	exports.teamTotalTime = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    company = res.body.team;

		db.Punchs.findAll({
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 team: team,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//company
	exports.companyTotalTime = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    company = res.body.company;

		db.Punchs.findAll({
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 company: team,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};


// D
// -- List of Company(company, leng) leng = Long (emails, fname, lname), short = (Compony and Users count)

	//company long
	exports.companyDetailsFull = function (req, res){

		let company = res.body.company;

		db.Users.findAll({
			where: {
				 company: company,
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//company short
	exports.companyDetails = function (req, res){

		let company = res.body.company;

		db.Users.findAll({
			where: {
				 company: company,
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};