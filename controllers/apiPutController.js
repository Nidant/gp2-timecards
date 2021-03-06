const db = require('../models');

// Put

// -- User(fname, lname)
exports.updateUser = function (req, res){

		let id = res.body.id,
		    lName = res.body.lname,
		    fName = res.body.fname,
		    email = res.body.email,
		    password = res.body.password,
		    company = res.body.company,
		    team = res.body.team;

		db.Users.update({
			fname: fName,
			lName: lName,
			email: email,
			password: password,
			company: company,
			team: team
		},
		{
			where: {
				id: id
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

// -- Time(id, start, end)
exports.updateTimePunch = function (req, res){

		let id = req.body.id,
		    stopTime = req.body.stopTime,
		    stopDate = req.body.stopDate,
		    note = req.body.note;

		db.Punchs.update({
			stopDate: stopDate,
			stopTime: stopTime,
			note: note
		},
		{
			where: {
				id: id
			}
		})
		.then(function(result) {
			res.json(result);
		});
	}

// -- Update(Compony Name)
exports.updateCompanyName = function (req, res){

		let oldCompany = res.body.companyOld,
			company = res.body.company;


		db.users.update({
			company: company
		},
		{
			where: {
				company: company
			}
		})
		.then(function(result) {
			res.json(result);
		});
	}

// -- Job/Task(id, job, task)
exports.updateJobTask = function (req, res){

		let id = res.body.id,
		    job = res.body.job,
		    task = res.body.task;

		db.Jobs.update({
			job: job,
			task: task
		},
		{
			where: {
				id: id
			}
		})
		.then(function(result) {
			res.json(result);
		});
	}

	// -- Job/Task(id, job, task)
exports.updateJobName = function (req, res){

		let id = res.body.id,
		    job = res.body.lname,
		    fName = res.body.fname;

		db.Jobs.update({
			job: job,
		},
		{
			where: {
				job: job
			}
		})
		.then(function(result) {
			res.json(result);
		});
	}