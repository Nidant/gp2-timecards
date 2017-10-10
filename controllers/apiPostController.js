const db = require('../models');

// -- new user (fname, lname, username, company, password)
exports.newUser = function (req, res){
	console.log(req.body)
	let fName = req.body.fName,
		lName = req.body.lName,
		email = req.body.email,
		password = req.body.password,
		company = req.body.company,
		team = req.body.team;

	db.Users.create({
		fName: fName,
		lName: lName,
		email: email,
		password: password,
		company: company,
		team: team
	})
	.then(function(result) {
		res.json(result);
	});
};

// -- time punch(type, name, startDate, endDate) type = Company, User, Team
exports.newTimePunch = function (req, res){

	let startDate = req.body.start,
		startTime = req.body.startTime,
		stopDate = req.body.stop,
		stopTime = req.body.stopTime,
		note = req.body.note;

	db.Punchs.create({
		startDate: start,
		startTime: startTime,
		stop: stop,
		stopTime: stopTime,
		note: note
	})
	.then(function(result) {
			res.json(result);
	});
};

// -- new job/task(job, Task)
exports.newJob = function (req, res){

	let job = req.body.job,
		task = req.body.task;

	db.Jobs.create({
		job: job,
		task: task
	})
	.then(function(result) {
		res.json(result);
	});
};

// -- addHoliday Hours (type, name, hours, date) type = Company, User, Team

// exports.holiday = function (req, res){
// 		db.Users.create({
// 			where: {
// 				company: req.body.company,
// 				include: {
// 					model: Punchs,
// 					include: {
// 						model: Jobs
// 					}
// 				}
// 			}
// 		})
// 	};

// exports.holiday = function (req, res){
// 		db.users.create({

// 		})
// 	};



// -- join Team
// exports.addTeamMember = function (req, res){
		
// 	};