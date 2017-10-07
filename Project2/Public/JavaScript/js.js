function login(){
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='loginPrompt'>Please enter your email and password.</h2>");
	$('#loginPopup').append("Email: " + "<input class='center' type='text' name='email'>");
	$('#loginPopup').append("Password: " + "<input class='center' type='password' name='password'>");
	$('#loginPopup').append("<button class='center' type='button'>LOGIN</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

function newUser(){
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='createUserPrompt'>Enter all user information.</h2>");
	$('#loginPopup').append("Company: " + "<input class='center' type='text' name='company'>");
	$('#loginPopup').append("First Name: " + "<input class='center' type='text' name='fname'>");
	$('#loginPopup').append("Last Name: " + "<input class='center' type='text' name='lname'>");
	$('#loginPopup').append("Email: " + "<input class='center' type='text' name='email'>");
	$('#loginPopup').append("Password: " + "<input class='center' type='password' name='password'>");
	$('#loginPopup').append("<button class='center' type='button'>CREATE</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

//when the close button is pressed, close the window
function closeWindow(){
	$('#loginPopup').attr('class', '');
	document.getElementById("loginPopup").innerHTML = "";
}

var testDates = ["2017-10-02 08:00:00","2017-10-02 17:00:00", "2017-10-03 08:00:00","2017-10-03 17:00:00","2017-10-04 08:00:00","2017-10-04 12:00:00","2017-10-04 13:00:00","2017-10-04 17:00:00" ]

