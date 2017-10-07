const db = require('../models');


// Delete

// -- User(id, fname, lname, username, company, password)
exports.delteUser = function (req, res){

	let id = res.body.id 

		db.User.destroy({
			where: {
				id: id
			}
		});
	};

// -- Team(id)
exports.delteTeam = function (req, res){
			let team = res.body.team 

		db.Team.destroy({
			where: {
				team: team
			}
		});
	};

// -- company(name)
exports.delteCompany = function (req, res){
			let company = res.body.company

		db.User.destroy({
			where: {
				company: company
			}
		});
	};

// -- Time(id, start, end)
exports.delteTimePunch = function (req, res){
			let id = res.body.id 

		db.Punch.destroy({
			where: {
				id: id
			}
		});
	};

// -- Job/Task(id, job, task)
exports.delteTask = function (req, res){
			let id = res.body.id 

		db.Job.destroy({
			where: {
				id: id
			}
		});
	};

// -- Job/Task(id, job, task)
exports.delteJob = function (req, res){
			let job = res.body.job 

		db.Job.destroy({
			where: {
				job: job
			}
		});
	};