//Modified from http://www.w3schools.com/json/json_example.asp

var xmlhttp = new XMLHttpRequest();
var url = "data/testdata.json";

xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		myFunction(xmlhttp.responseText);
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

// SORT DATA 
// BY Time

// By Type

// By Location (alphabetical)

// By Distance

function myFunction(response) {
	var arr = JSON.parse(response);
	var out = "<table>";
	
	out += "<tr><td> Event </td><td> Location </td><td> Time </td></tr>";
	
	for(var i = 0; i < arr.length; i++) {
		out += "<tr><td>" + arr[i].Name +
		"</td><td>" + arr[i].Location +
		"</td><td>" + arr[i].Time +
		"</td></tr>";
	}
	out += "</table>";

	document.getElementById("EventList").innerHTML = out;
}