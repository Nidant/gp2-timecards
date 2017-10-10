
function login(){
	closeWindow();
	$('#loginPopup').attr('class', 'displayLogin center');
	$('#loginPopup').append("<h2 class='center' id='loginPrompt'>Please enter your email and password.</h2>");
	$('#loginPopup').append("Email: " + "<input class='center' type='text' name='email'>");
	$('#loginPopup').append("Password: " + "<input class='center' type='password' name='password'>");
	$('#loginPopup').append("<button class='center' type='button'>LOGIN</button>");
	$('#loginPopup').append("<p class='center' id='closeWindow' onclick='closeWindow()'>Close</p>");
};

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
$("#contactUs").click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactUs").offset().top
    }, 2000);
});

//create new user when submit button is clicked
function postNewUser(){
	function postUser(userData) {
    	$.post("/api/", userData)
//      	.then(getUsers);
     console.log(userData);
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
	}
}

//What occurs when the user clicks on the clock in button
function timePunch(){
	var test = $('.timePunch').text();
	console.log(test);
	if($('.timePunch').text() == "CLOCK IN"){
		$('.timePunch').text("CLOCK OUT");
	}else if($('.timePunch').text() == "CLOCK OUT"){
		$('.timePunch').text("CLOCK IN");
	}
}



// function getUsers() {
// 	$.get("/api/", function(data) {
// 	  var rowsToAdd = [];
// 	  for (var i = 0; i < data.length; i++) {
// 	    rowsToAdd.push(createUserRow(data[i]));
// 	  }
// 	  renderUserList(rowsToAdd);
// 	  nameInput.val("");
// 	});
// }

// function createUserRow(userData){
// 	var newTr = $("<tr>");
//     newTr.data("user", userData);
//     newTr.append("<td>" + userData.fname + "</td>");
//     newTr.append("<td> " + userData.Posts.length + "</td>");
//     newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
//     newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
//     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
//     return newTr;
// }



// var testDates = ["2017-10-02 08:00:00","2017-10-02 17:00:00", "2017-10-03 08:00:00","2017-10-03 17:00:00","2017-10-04 08:00:00","2017-10-04 12:00:00","2017-10-04 13:00:00","2017-10-04 17:00:00" ]

