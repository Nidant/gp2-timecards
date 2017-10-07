const db = require('../models');

// -- Time punch (type, name, startDate, endDate) type = Company, Users, Team  => {startTime, endTime, Type}
	
	//Users
	exports.usersTimePunch = function (req, res){

		let start = res.body.start,
		    end = res.body.end,
		    email = res.body.email;

		db.Punchs.findAll({
			attributes: ['task', 'job','start', 'stop', 'note'],
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 email: email,
				 $gte: start,
				 $lte: end
			}
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
	};