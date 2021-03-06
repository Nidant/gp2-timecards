const db = require('../models');

// -- Time punch (type, name, startDate, endDate) type = Company, Users, Team  => {startTime, endTime, Type}
	
	//Users
	exports.usersTimePunch = function (req, res){

		var start = res.query.start,
		    end = res.query.end,
		    email = res.query.email;

		db.Punchs.findAll({
			group: ['startDate'],

			attributes: ['id', 'startDate','startTime', 'stopDate', 'stopTime'],

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
		.then(function(result) {
			console.log(result);
			res.json(result);
		});

	};

	//Users
	exports.usersInfo = function (req, res){

		var email = res.query.email;

		db.Punchs.findAll({
			attributes: ['fName', 'company'],
			where: {
				 email: email,
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//team
	exports.teamTimePunch = function (req, res){

		let start = res.query.start,
		    end = res.query.end,
		    team = res.query.team;

		db.Punchs.findAll({
			group: ['email'],
			attributes: ['id', 'startDate','startTime', 'stopDate', 'stopTime'],
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
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//company
	exports.companyTimePunch = function (req, res){

		let start = res.query.start,
		    end = res.query.end,
		    company = res.query.company;

		db.Punchs.findAll({
			attributes: ['id', 'startDate','startTime', 'stopDate', 'stopTime'],
			include: [{
				model: Users,
				required: true
			}],
			where: {
				 company: company,
				 $gte: start,
				 $lte: end
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};


// C
// -- Total hours (type, name, startDate, endDate) type = Company, Users, Team => total Hours (OverTime, Normal, Holiday, Sick)

	// //Users
	// exports.UsersTotalTime = function (req, res){

	// 	let start = res.query.start,
	// 	    end = res.query.end,
	// 	    email = res.query.email;

	// 	db.Punchs.findAll({
	// 		include: [{
	// 			model: Users,
	// 			required: true
	// 		}],
	// 		where: {
	// 			 email: email,
	// 			 $gte: start,
	// 			 $lte: end
	// 		}
	// 	})
	// 	.then(function(result) {
	// 		res.json(result);
	// 	});
	// };

	// //team
	// exports.teamTotalTime = function (req, res){

	// 	let start = res.query.start,
	// 	    end = res.query.end,
	// 	    company = res.query.team;

	// 	db.Punchs.findAll({
	// 		include: [{
	// 			model: Users,
	// 			required: true
	// 		}],
	// 		where: {
	// 			 team: team,
	// 			 $gte: start,
	// 			 $lte: end
	// 		}
	// 	})
	// 	.then(function(result) {
	// 		res.json(result);
	// 	});
	// };

	// //company
	// exports.companyTotalTime = function (req, res){

	// 	let start = res.query.start,
	// 	    end = res.query.end,
	// 	    company = res.query.company;

	// 	db.Punchs.findAll({
	// 		include: [{
	// 			model: Users,
	// 			required: true
	// 		}],
	// 		where: {
	// 			 company: team,
	// 			 $gte: start,
	// 			 $lte: end
	// 		}
	// 	})
	// 	.then(function(result) {
	// 		res.json(result);
	// 	});
	// };


// D
// -- List of Company(company, leng) leng = Long (emails, fname, lname), short = (Compony and Users count)

	//company long
	exports.companyDetailsFull = function (req, res){

		let company = res.query.company;

		db.Users.findAll({
			where: {
				 company: company
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	//company short
	exports.companyDetails = function (req, res){

		let company = res.query.company;

		db.Users.findAll({
			where: {
				 company: company
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

		//company short
	exports.login = function (req, res){

		let email = req.query.email,
			pwd = req.query.password;

		db.Users.findAll({
			where: {
				 email: email,
				 password: pwd
			}
		})
		.then(function(result) {
			res.json(result);
		});
	};

	exports.timePunchInfo = function (req, res){
		console.log(req.query);
		console.log("================================");
		let UserId = req.query.UserId;

		db.Punchs.findAll({
			where: {
				 UserId: UserId
			}
		})
		.then(function(result) {
			console.log(result);
			res.json(result);
		});
	};

// exports.login = function (req, res){

//   let email = res.query.email,
//        password = res.query.password;
// console.log(res);
//   db.Users.count({
//         where: {
//             email: email,
//             password: password,
//         }
//     })
//     .then(function(count) {
//         if (count != 0 ){
//             res.redirect(path.join(__dirname, "../public/Public/HTML/companyHome.html"));
//        }else{
//                res.json("err: Incorrect username or password");
//        }
//     });
// };