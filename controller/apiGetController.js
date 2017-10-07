const db = require('../models');

// -- Time punch (type, name, startDate, endDate) type = Company, User, Team  => {startTime, endTime, Type}
	
	//user
	exports.userTimePunch = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    email = res.body.email;

		db.Punch.findAll{
			attributes: ['start', 'stop', 'note']
			include: [{
				model: user,
				required: true
				include: {
					model: login,
					required: true
				}
			}],
			where: {
				 email: email,
				 $gte: start,
				 $lte: end
			}
		}

	//team
	exports.teamTimePunch = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    team = res.body.team;

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
	exports.companyTimePunch = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    company = res.body.company;

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
	exports.userTotalTime = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    email = res.body.email;

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
	exports.teamTotalTime = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    company = res.body.team;

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
		exports.companyTotalTime = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    company = res.body.company;

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
	exports.companyDetailsFull = function (req, res){


	}

	//company short
	exports.companyDetails = function (req, res){


	}

// B
// -- Login (userName, Password) => Success/Fail

	//log in check
	exports.login = function (req, res){

	}

// ============================================================
