const Logins = require(`../models/logins`),
	  Punchs = require('../models/punchs'),
	  Teams = require('../models/teams'),
	  Jobs = require('../models/jobs'),
	  Users = require('../models/users');


exports.apiController = function (req, res){

	let action = req.body.action;

	[action](req).then(function(res) {
			res.json(res);
		});

}

// -- Time punch (type, name, startDate, endDate) type = Company, User, Team  => {startTime, endTime, Type}
	
	//user
	function userTimePunch(data){
		let start = data.body.start,
		    end = data.body.end,
		    email = data.body.email;

		db.Punch.findAll{
			attributes: ['start', 'stop', 'note']
			include: [{
				model: user
				include: {
					model: login
				}
			}],
			where: {
				 email: email,
				 $gte: start,
				 $lte: end
			}
		}

	//team
	function teamTimePunch(data){

		let start = data.body.start,
		    end = data.body.end,
		    team = data.body.team;

		db.Punch.findAll{
			attributes: ['start', 'stop', 'note']
			include: [{
				model: user,
				attributes: [fName, lName],
				include: {
					model: team
				}
			}],
			where: {
				 team: team,
				 $gte: start,
				 $lte: end
			}
		};
	};

	//company
	function companyTimePunch(data){
		let start = data.body.start,
		    end = data.body.end,
		    company = data.body.company;

		db.Punch.findAll{
			include: [{model: User},{model: login}],
			where: {
				 company: team,
				 $gte: start,
				 $lte: end
			}
		}


		db.Punch.findAll{
			attributes: ['start', 'stop', 'note']
			include: [{
				model: user
				include: {
					model: team
				}
			}],
			where: {
				 company: company,
				 $gte: start,
				 $lte: end
			}
		};
	}


// C
// -- Total hours (type, name, startDate, endDate) type = Company, User, Team => total Hours (OverTime, Normal, Holiday, Sick)

	//user
	function userTotalTime(data){
		let start = data.body.start,
		    end = data.body.end,
		    email = data.body.email;

		db.Punch.findAll{
			include: [{model: User},{model: Login}],
			where: {
				 email: email,
				 $gte: start,
				 $lte: end
			}
		}.then(function(punch) {
			res.json(punch);
		});
	}

	//team
	function teamTotalTime(data){
		let start = data.body.start,
		    end = data.body.end,
		    company = data.body.team;

		db.Punch.findAll{
			include: [{model: User},{model: Team}],
			where: {
				 team: team,
				 $gte: start,
				 $lte: end
			}
		}.then(function(punch) {
			res.json(punch);
		});
	}

	//company
	function companyTotalTime(data){
		let start = data.body.start,
		    end = data.body.end,
		    company = data.body.company;

		db.Punch.findAll{
			include: [{model: User},{model: login}],
			where: {
				 company: team,
				 $gte: start,
				 $lte: end
			}
		}.then(function(punch) {
			res.json(punch);
		});
	}


// D
// -- List of Company(company, leng) leng = Long (emails, fname, lname), short = (Compony and user count)

	//company long
	function companyDetailsFull(data){

	}

	//company short
	function companyDetails(data){

	}

// B
// -- Login (userName, Password) => Success/Fail

	//log in check
	function login(data){

	}

// ============================================================
