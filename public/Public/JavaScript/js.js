/* Extend jQuery with functions for PUT and DELETE requests. */

function _ajax_request(url, data, callback, type, method) {
    if (jQuery.isFunction(data)) {
        callback = data;
        data = {};
    }
    return jQuery.ajax({
        type: method,
        url: url,
        data: data,
        success: callback,
        dataType: type
        });
}

jQuery.extend({
    put: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'PUT');
    },
    delete_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'DELETE');
    }
});

//This is ran when the Login button is clicked
function login(){
	closeWindow();
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='loginPrompt'>Please enter your email and password.</h2>");
	$('#loginPopup').append("Email: " + "<input class='center' type='text' id='userEmail' name='email'>");
	$('#loginPopup').append("Password: " + "<input class='center' type='password' id='userPassword' name='password'>");
	$('#loginPopup').append("<button class='center' type='button' onclick='loginButton()'>LOGIN</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

//this is ran when the Add User button is clicked
function newUser(){
	closeWindow();
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='createUserPrompt'>Enter all user information.</h2>");
	$('#loginPopup').append("Company: " + "<input class='center' id='newCompany' type='text' name='company'>");
	$('#loginPopup').append("First Name: " + "<input class='center' id='newfname' type='text' name='fname'>");
	$('#loginPopup').append("Last Name: " + "<input class='center' id='newlname' type='text' name='lname'>");
	$('#loginPopup').append("Email: " + "<input class='center' id='newEmail' type='text' name='email'>");
	$('#loginPopup').append("Password: " + "<input class='center' id='newPassword' type='password' name='password'>");
	$('#loginPopup').append("Confirm Password: " + "<input class='center' id='newPassword2' type='password' name='password2'>");
	$('#loginPopup').append("<button class='center' onclick='postNewUser()' type='button'>CREATE</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

//when the close button is pressed, close the window
function closeWindow(){
	$('#loginPopup').attr('class', '');
	document.getElementById("loginPopup").innerHTML = "";
}

//scroll to the top of Contact Us when clicked.
$("#contactUs").click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactUs").offset().top
    }, 2000);
});

//create new user when submit button is clicked
function postNewUser(){
	function postUser(userData) {
    	$.post("/api/", userData)
      	.then(login);
  	}
  	//verify user information is entered correectly
  	if($('#newPassword').val() != $('#newPassword2').val()){
  		alert('Passwords do not match, please re-enter your password and try again');
  	}else if($('#newfname').val() == "" || $('#newlname').val() == "" || $('#newEmail').val() == "" || $('#newPassword').val() == "" || $('#newCompany').val() == ""){
  		alert('Some information is missing from the form. Please make sure all information is filled out fully.');
  	}else{
		postUser({
			action: 'newUser',
			fName: $('#newfname').val(),
			lName: $('#newlname').val(),
			email: $('#newEmail').val(),
			password: $('#newPassword').val(),
			company: $('#newCompany').val()
		});
		alert("New user has been created, please login.");
	}
}

//run this function when the login button is pressed.
function loginButton(){
	function getUser(userData) {
    	$.get("/api/", userData, function(data){
    		console.log(data);
    		//ensure all the retreived data is saved in the session
    		sessionStorage.setItem('userId', data[0].id);
    		sessionStorage.setItem('userfName', data[0].fName);
			sessionStorage.setItem('userlName', data[0].lName);
			sessionStorage.setItem('userCompany', data[0].company);
			sessionStorage.setItem('userEmail', data[0].email);
			sessionStorage.setItem('userPassword', data[0].password);
    	})
      	.then(changeURL);
    	 
  	}
  	//verify user information is entered correctly
  	if($('#userEmail').val() == "" || $('#userPassword').val() == ""){
  		alert('Some information is missing from the form. Please make sure all information is filled out fully.');
  	}else{
		getUser({
			action: 'login',
			email: $('#userEmail').val(),
			password: $('#userPassword').val()
		});
	}
}

//create a function to run when the URL changes to the company site.
function changeURL(){
	var currentURL = window.location.origin;
	document.location.href = currentURL + "/company";
}

//What occurs when the user clicks on the clock in button
function timePunch(){
	//if the user is clocking in we need to post the time and date of the clock in.
	if($('.timePunch').text() == "CLOCK IN"){
		function postClockIn(clockInData) {
	    	$.post("/api/", clockInData, function(data){
	    		console.log(data);
	    	})
	    	//after the database is queried, update the page with the correct information
	      	.then(updatePageHtml);
  		}
  		//set up our current time variable in the correct format.
  		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

		//set up the current date in the correct format.
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0

		var yyyy = today.getFullYear();
		if(dd<10){
		  dd='0'+dd;
		} 
		if(mm<10){
		  mm='0'+mm;
		} 
		var today = yyyy+'-'+mm+'-'+dd;
		//---------end time formatting---------

		$('.timePunch').text("CLOCK OUT");
		postClockIn({
			action: 'newTimePunch',
			start: today,
			startTime: time,
			UserId: sessionStorage.getItem('userId')	
		});
		//if the user is clocking out
	}else if($('.timePunch').text() == "CLOCK OUT"){
		function updateClockOut(clockOutData) {
	    	$.put("/api/", clockOutData, function(data){
	    		console.log(data);
	    		sessionStorage.setItem('timeId', data[0].id);
	    	})
	    	//run the update page function to update the visual times to the user
	      	.then(updatePageHtml);
  		}

  		//set up our current time variable in the correct format.
  		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

		//set up the current date in the correct format.
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0

		var yyyy = today.getFullYear();
		if(dd<10){
		  dd='0'+dd;
		} 
		if(mm<10){
		  mm='0'+mm;
		} 
		today = yyyy+'-'+mm+'-'+dd;
		//---------end time formatting---------
		//change the text inside the button to read CLOCK IN
		$('.timePunch').text("CLOCK IN");
		//Setting up the object to pass into the function updateClockOut
		updateClockOut({
			action: 'updateTimePunch',
			stopDate: today,
			stopTime: time,
			id: sessionStorage.getItem('timeId')	
		});
	}
}

//create a function for when the user clocks in to update their clock times and dates.
function updatePageHtml(){
	function getClockData(timeData) {
    	$.get("/api/", timeData, function(data){
    		console.log(data);
    		//clear our previous enteries
    		document.getElementById('clockInDate').innerHTML = "";
    		document.getElementById('clockInTime').innerHTML = "";
    		document.getElementById('clockOutTime').innerHTML = "";
    		document.getElementById('totalTime').innerHTML = "";
    		//Show our results on the company home page. 
    		//We will show the last 5 entries, but that can be adjusted.
    		for (var i = data.length - 1; i > data.length - 6; i--) {
    			//always check for blank information before appending a new section.
    			if(data[i].startDate == null){
    				$('#clockInDate').append('<br>');
    			}else{
    				$('#clockInDate').append('<p class="light center">' + data[i].startDate + '</p>');
    			}
    			if(data[i].startDate == null){
    				$('#clockInTime').append('<br>');
    			}else{
    				$('#clockInTime').append('<p class="light center">' + data[i].startTime + '</p>');
    			}
    			if(data[i].stopTime == null){
    				$('#clockOutTime').append('<br>');
    			}else{
    				$('#clockOutTime').append('<p class="light center">' + data[i].stopTime + '</p>');
    			}
    			if(data[i].startTime == null || data[i].stopTime == null){
    				$('#totalTime').append('<p class="light center">' + "Error" + '</p>');
    			}else{
    				$('#totalTime').append('<p class="light center">' + "Total Here" + '</p>');
    			}

    		}

    	})
      	.then();
    	 
  	}
	getClockData({
		action: 'timePunchInfo',
		UserId: sessionStorage.getItem('userId')
	});
}