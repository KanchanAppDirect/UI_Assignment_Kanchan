 $(document).ready(function() {


 	$(".header-bar-item-link ").on("click", function() {
 		$("#Profile-dropdown").show();
 	});

 	$(".header-bar-item-link ").on("mouseleave", function() {
 		$("#Profile-dropdown").hide();
 	});



	$("#fname").on("blur", function() {
 		var regex = /[a-zA-Z]{2,30}$/;
 		var ctrl = $("#fname").val();
 		if (!regex.test(ctrl)) {
 			alert("Name Cannot be empty");
 			$("#register").prop('disabled', true);

 		}
 	});

 	$("#P_Address").on("blur", function() {

 		var add = $("#P_Address").val();
 		if ((add === "") || (!add.replace(/\s/g, '').length)) {
 			alert("Permanent Address cannot be empty");
 			$("#register").prop('disabled', true);

 		}
 	});

 	$("#check").on("click", function() {

 		if ($("#check").prop('checked') == true) {
 			var address_P = $("#P_Address").val();
 			$("#C_address").val(address_P);
 			$("#C_address").attr("disabled", true);
 		} else {
 			$("#C_address").val("");

 			$("#C_address").attr("disabled", false);
 		}
 	});

 	$("#C_address").on("blur", function() {

 		var cadd = $("#C_address").val();
 		if ((cadd === "") || (!cadd.replace(/\s/g, '').length)) {
 			alert("Current Address cannot be empty");
 			$("#register").prop('disabled', true);
 		}

 	});

 	$("#email").on("blur", function() {

 		var email = $("#email").val();
 		var res = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
 		if (res === false) {
 			alert("Enter the  correct email!");
 			$("#register").prop('disabled', true);
 		}
 	});

 	$("#Phone_no").on("blur", function() {

 		var num = $("#Phone_no").val();
 		var res = /^[0-9]{10}$/.test(num);
 		if (res === false) {
 			alert("Numbers Only");
 			$("#register").prop('disabled', true);
 		}
 	});

 	$("#password").on("blur", function() {

 		var str = $("#password").val();
 		var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 		var res = re.test(str);
 		if (res === false) {
 			alert("Please enter a valid password!");
 			$("#register").prop('disabled', true);
 		}
 	});

 	$("#re-pass").on("blur", function() {

 		var cpass = $("#re-pass").val();
 		var pass = $("#password").val();
 		if (cpass != pass) {
 			$("#register").prop('disabled', true);
 		} else {
 			$("#register").prop('disabled', false);
 		}
 	});

 	$("#reset").on("click", function() {

 		$("#fname").val("");
 		$("#lname").val("");
 		$("#P_Address").val("");
 		$("#C_address").val("");
 		$("#email").val("");
 		$("#Phone_no").val("");
 		$("#password").val("");
 		$("#re-pass").val("");
 		$("#check").prop('checked', false);
 		$("#register").prop('disabled', true);
 	});


 	$("#register").on("click", function() {

 		//var ul = $("#section-dashboard-content");
 		//var li = $("<li></li>", {
 		//	class: "section-dashboard-content-item"
 		//});
 		var fname = $("#fname").val();
 		var lname = $("#lname").val();
 		var emailValue = $("#email").val();
 		var fullName = fname + " " + lname;

 		//var a = $("<a href='#' class='section-dashboard-content-item-link'> </a>").text(fullName);
 		//var div = $("<div class='section-dashborad-email'> </div>").text(emailValue);

 		//li.append("<a href='#' class='section-dashboard-content-item-link'>" + fullName + "</a>");
 		//li.append("<div class='section-dashborad-email'>" + emailValue + "</div>");
 		//ul.append(li);
 		//$(".section-dashboard").append("<div class='demo'></div>");


 		$(".section-dashboard-content").append("<li class='section-dashboard-content-item'></li>");
 		$(".section-dashboard-content-item").append("<a href='#' class='section-dashboard-content-item-link'>" + fullName + "</a>");
 		$(".section-dashboard-content-item").append("<div class='section-dashborad-email'>" + emailValue + "</div>");



 	});
 	$(".section-dashboard-content-item-link").on("mouseenter", function() {
 		$(".section-dashborad-email").attr(emailValue);

 	});

 });