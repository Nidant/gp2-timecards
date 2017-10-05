function login(){
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='loginPrompt'>Please enter your username and password.</h2>");
	$('#loginPopup').append("Username: " + "<input class='center' type='text' name='username'>");
	$('#loginPopup').append("Password: " + "<input class='center' type='password' name='password'>");
	$('#loginPopup').append("<button class='center' type='button'>LOGIN</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

//when the close button is pressed, close the window
function closeWindow(){
	$('#loginPopup').attr('class', '');
	document.getElementById("loginPopup").innerHTML = "";
}