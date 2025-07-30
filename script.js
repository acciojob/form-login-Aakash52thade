function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const fname = form["fname"].value;
	const lname = form["lname"].value;

	alert(fname+" "+lname);
	return;

}
