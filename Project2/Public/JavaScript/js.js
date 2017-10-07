function login(){
	closeWindow();
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='loginPrompt'>Please enter your email and password.</h2>");
	$('#loginPopup').append("Email: " + "<input id='loginEmail' class='center' type='email' name='email'>");
	$('#loginPopup').append("Password: " + "<input id='loginPassword' class='center' type='password' name='password'>");
	$('#loginPopup').append("<button class='center' type='button' onclick='loginPush()'>LOGIN</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

function newUser(){
	closeWindow();
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='createUserPrompt'>Enter all user information.</h2>");
	$('#loginPopup').append("Company: " + "<input id='createCompany' class='center' type='text' name='company'>");
	$('#loginPopup').append("First Name: " + "<input id='createFirst' class='center' type='text' name='fname'>");
	$('#loginPopup').append("Last Name: " + "<input id='createLast' class='center' type='text' name='lname'>");
	$('#loginPopup').append("Email: " + "<input id='createEmail' class='center' type='email' name='email'>");
	$('#loginPopup').append("Password: " + "<input id='createPassword' class='center' type='password' name='password'>");
	$('#loginPopup').append("<button class='center' type='button' onclick='createPost()'>CREATE</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

//when the close button is pressed, close the window
function closeWindow(){
	$('#loginPopup').attr('class', '');
	document.getElementById("loginPopup").innerHTML = "";
};

function loginPush(){
	var email = $('#loginEmail').val();
	var password = $('#loginPassword').val();
	console.log(email + "\n" + password);
};

function createPost(){
	var company = $('#createCompany').val();
	var fname = $('#createFirst').val();
	var lname = $('#createLast').val();
	var email = $('#createEmail').val();
	var password = $('#createPassword').val();
	console.log(company + "\n" + fname + "\n" + lname + "\n" + email + "\n" + password);
};

//scroll to Contact us when it is clicked
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactText").offset().top
    }, 2000);
});