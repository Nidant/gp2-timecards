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


// -- Time(id, start, end)
exports.delteTimePunch = function (req, res){
			let id = res.body.id 

		db.Punchs.destroy({
			where: {
				id: id
			}
		});
	};

// -- Job/Task(id, job, task)
exports.delteTask = function (req, res){
			let id = res.body.id 

		db.Jobs.destroy({
			where: {
				id: id
			}
		});
	};

// -- Job/Task(id, job, task)
exports.delteJob = function (req, res){
			let job = res.body.job 

		db.Jobs.destroy({
			where: {
				job: job
			}
		});
	};