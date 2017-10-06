const db = require('../models'),
	  bodyParse = require('bodyParse');


module.exports = function(app) {
	app.get("/api/", function(req, res){

	}

	app.post("/api/", function(req, res){

});

	app.put("/api/", function(req, res){

	}

	app.delete("/api", function(req, res){



	});
}
// A
// -- Time punch (type, name, startDate, endDate) type = Company, User, Team  => {startTime, endTime, Type}
	
	//user
	function userTimePunch(data){
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
	function teamTimePunch(data){
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
		}.then(function(punch) {
			res.json(punch);
		});
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
// Post

// -- new user (fname, lname, username, company, password)
	function newUser(data){

	}

// -- time punch(type, name, startDate, endDate) type = Company, User, Team
	function newTimePunch(data){
		
	}

// -- new job/task(job, Task)
	function newJob(data){
		
	}

// -- addHoliday Hours (type, name, hours, date) type = Company, User, Team
	function holiday(data){

	}

// -- join Team
	function addTeamMember(data){

	}

// ============================================================
// Put

// -- User(id, fname, lname, username, company, password)
	function updateUser(data){
		
	}

// -- Time(id, start, end)
	function updateTimePunch(data){

	}

// -- Update(Compony Name)
	function updateCompanyName(data){
		
	}

// -- Job/Task(id, job, task)
	function updateJobName(data){

	}

// ============================================================
// Delete

// -- User(id, fname, lname, username, company, password)
	function delteUser(data){
		
	}
// -- Team(id)
	function delteTeam(data){
		
	}

// -- company(name)
	function delteCompany(data){
		
	}

// -- Time(id, start, end)
	function delteTimePunch(data){
		
	}

// -- Job/Task(id, job, task)
	function delteTask(data){
		
	}