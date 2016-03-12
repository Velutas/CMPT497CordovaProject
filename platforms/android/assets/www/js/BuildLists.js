//Modified from http://www.w3schools.com/json/json_example.asp

<<<<<<< HEAD

$('#Nearest').live('pagecreate', function() {
	// Set this to the location on the AWS server where the JSON file is stored 
=======
$('#Nearest').live('pagecreate', function() {
	/* Set this to the location on the AWS server where the JSON file is stored */
>>>>>>> parent of 6cb5e85... Try to fix json get
	var xmlhttp = new XMLHttpRequest();
	var url = "data/AllEvents.json";

	/* Request json */
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	/* Convert JSON to HTML */
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

		/* To Do: Fix bug where table doesn't display on the initial load */
		document.getElementById("EventList").innerHTML = out;
	}
});