 function showDropdown() {
 	document.getElementById("Profile-dropdown").classList.toggle("hide");
 }

 function hideDropdown() {
 	document.getElementById("Profile-dropdown").classList.add("hide");
 }

 function validate1() {
 	var regex = /[a-zA-Z]{2,30}$/;
 	var ctrl = document.getElementById("fname").value;
 	if (!regex.test(ctrl)) {
 		alert("Name Cannot be empty")
 		document.getElementById("register").disabled = true;
 		return false;
 	}
 }

 function emptyAddressP() {
 	var add = document.getElementById("P_Address").value;
 	if ((add === "") || (!add.replace(/\s/g, '').length)) {
 		alert("Permanent Address cannot be empty")
 		document.getElementById("register").disabled = true;
 		return false;
 	}
 }

 function copy_Address() {
 	if (document.getElementById('check').checked == true) {
 		var n1 = document.getElementById('P_Address').value;
 		var n2 = document.getElementById('C_address');
 		n2.value = n1;
 		document.getElementById("C_address").disabled = true;
 	} else {
 		document.getElementById('C_address').value = "";

 		document.getElementById("C_address").disabled = false;
 	}
 }

 function emptyAddressC() {
 	var cadd = document.getElementById("C_address").value;
 	if ((cadd === "") || (!cadd.replace(/\s/g, '').length)) {
 		alert("Current Address cannot be empty");
 		document.getElementById("register").disabled = true;
 		return false;

 	}
 }

 function emailValidation() {
 	var email = document.getElementById("email").value;
 	var res = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
 	if (res === false) {
 		alert("Enter the  correct email!")
 		document.getElementById("register").disabled = true;
 		return false;
 	}
 }

 function PhoneValidation() {
 	var num = document.getElementById("Phone_no").value;
 	var res = /^[0-9]{10}$/.test(num);

 	if (res === false) {
 		alert("Numbers Only");
 		document.getElementById("register").disabled = true;
 		return false;

 	}
 }

 function checkPassword() {
 	var str = document.getElementById("password").value;
 	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 	var res = re.test(str);
 	if (res === false) {
 		alert("Please enter a valid password!");
 		document.getElementById("register").disabled = true;
 		return false;
 	}
 }

 function CpasswordValidation() {
 	var cpass = document.getElementById("re-pass").value;
 	var pass = document.getElementById("password").value;

 	if (cpass != pass) {
 		document.getElementById("register").disabled = true;
 		return false;
 	} else {
 		document.getElementById("register").disabled = false;
 		return true;
 	}
 }

 function resetData() {
 	document.getElementById('fname').value = '';
 	document.getElementById('lname').value = '';
 	document.getElementById('P_Address').value = '';
 	document.getElementById('C_address').value = '';
 	document.getElementById('email').value = '';
 	document.getElementById('Phone_no').value = '';
 	document.getElementById('password').value = '';
 	document.getElementById('re-pass').value = '';
 	document.getElementById('check').checked = false;
 	document.getElementById("register").disabled = true;
 }

 function DashBoard() {

 	var ul = document.getElementById("section-dashboard-span-id");
 	var li = document.createElement("li");
 	var a = document.createElement("a");
 	var div = document.createElement("div");
 	var fname = document.getElementById("fname").value;
 	var lname = document.getElementById("lname").value;

 	var emailValue = document.getElementById("email").value;
 	var fullName = document.createTextNode(fname + " " + lname);
 	var emailDisplay = document.createTextNode(emailValue);

 	a.setAttribute("href", "#");
 	a.setAttribute("class", "section-dashboard-content-item-link");
 	a.setAttribute("style", "text-decoration: none");
 	a.appendChild(fullName);

 	div.setAttribute("class", "section-dashborad-email");
 	div.appendChild(emailDisplay);

 	li.setAttribute("class", "section-dashboard-content-item");

 	li.appendChild(a);
 	li.appendChild(div);
 	ul.appendChild(li);

 }