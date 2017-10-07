const db = require('../models');

// Put

// -- User(fname, lname)
exports.updateUser = function (req, res){

		let id = res.body.id,
		    lName = res.body.lname,
		    fName = res.body.fname;

		db.User.update({
			fname: fName,
			lName: lName
		},
		{
			where: {
				id: id
			}
		});
	};

// -- login(userName, Company, email)
exports.updateLogin = function (req, res){

		let id = res.body.id,
		    email = res.body.email,
		    password = res.body.password,
		    compnay = res.body.company;

		db.login.update({
			email: email,
			password: password,
			company: company
		},
		{
			where: {
				id: id
			}
		});
	}

// -- Time(id, start, end)
exports.updateTimePunch = function (req, res){

		let id = res.body.id,
		    start = res.body.start,
		    end = res.body.end,
		    note = res.body.note;

		db.Punch.update({
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


		db.Login.update({
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

		db.Job.update({
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

		db.Job.update({
			job: job,
		},
		{
			where: {
				job: job
			}
		});
	}