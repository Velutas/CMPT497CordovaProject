$(document).on('pagecreate', '#Nearest', function() {
	var url = "data/testdata.json";
	//var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";

	//Have server only return nearby locations
	$.getJSON(url, {get_param: 'value' }, function( data ){ 
		var Nearby = "<table>"; 
		Nearby += "<tr><td> <h2>Event</h2> </td><td> <h2>Location</h2> </td><td> <h2>Time</h2> </td></tr>";
		
		$.each(data, function(index, element) {
			Nearby += "<tr><td>" + element.Name +
			"</td><td>" + element.Location +
			"</td><td>" + element.Time +
			"</td></tr>";
		});
		
		Nearby += "</table>";
		document.getElementById("EventList").innerHTML = Nearby;
	});
});


$(document).on('pagecreate', '#Categories', function() {
	//$(function() {
	//	$("CategoryList").accordion();
	//}
	
	var url = "data/testdata2.json";
	//var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";
	
	$.getJSON(url, {get_param: 'value' }, function( data ){
		var Activities = "<table class='Activities' > <tr><td> <h2>Event</h2> </td><td> <h2>Location</h2> </td><td> <h2>Time</h2> </td></tr>";
		var Arts = "<table> <tr><td> <h2>Event</h2> </td><td> <h2>Location</h2> </td><td> <h2>Time</h2> </td></tr>";
		var FoodDrink = "<table> <tr><td> <h2>Event</h2> </td><td> <h2>Location</h2> </td><td> <h2>Time</h2> </td></tr>";
		var Music = "<table> <tr><td> <h2>Event</h2> </td><td> <h2>Location</h2> </td><td> <h2>Time</h2> </td></tr>";
		var Other = "<table> <tr><td> <h2>Event</h2> </td><td> <h2>Location</h2> </td><td> <h2>Time</h2> </td></tr>";
		
		$.each(data, function(index, element) {
			if(element.Category == "Activities"){
				Activities += "<tr><td>" + element.Name +
				"</td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>";
			}
			if(element.Category == "Arts"){
				Arts += "<tr><td>" + element.Name +
				"</td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>";
			}
			if(element.Category == "Food & Drink"){
				FoodDrink += "<tr><td>" + element.Name +
				"</td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>";
			}
			if(element.Category == "Music"){
				Music += "<tr><td>" + element.Name +
				"</td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>";
			}
			if(element.Category == "Other"){
				Other += "<tr><td>" + element.Name +
				"</td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>";
			}
		});
		Activities += "</table>";
		Arts += "</table>";
		FoodDrink += "</table>";
		Music += "</table>";
		Other += "</table>";

		$('.Activities').append(Activities);
		$('.Arts').append(Arts);
		$('.FoodDrink').append(FoodDrink);
		$('.Music').append(Music);
		$('.Other').append(Other);
	});
});
