const Logins = require(`../models/logins`),
	  Punchs = require('../models/punchs'),
	  Teams = require('../models/teams'),
	  Jobs = require('../models/jobs'),
	  Users = require('../models/users');

// Put

exports.apiController = function (req, res){

	let action = req.body.action;

	[action](req).then(function(res) {
			res.json(res);
		});

}


// -- User(fname, lname)
	function updateUser(res){

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
	function updateUser(res){
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
	function updateTimePunch(res){
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
	function updateCompanyName(res){

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
	function updateJobTask(res){

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
	function updateJobName(res){

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