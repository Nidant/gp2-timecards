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
		});
	};

// -- Time(id, start, end)
exports.updateTimePunch = function (req, res){

		let id = res.body.id,
		    start = res.body.start,
		    end = res.body.end,
		    note = res.body.note;

		db.Punchs.update({
			start: start,
			end: end,
			note: note
		},
		{
			where: {
				id: id
			}
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
		});
	}