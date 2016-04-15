//var apigClient = apigClientFactory.newClient();
var Lat = 49.2767727;
var Long = -122.914417;

var imgurl = 'img/AppLogo.png';
var option = {
	enableHighAccuracy: true
};


$(document).on('pagecreate', '#Nearest', function() {	
	//var url = "data/testdata.json";
	var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";
	
	//Have server only return nearby locations
	$.getJSON(url, {get_param: 'value' }, function( data ){ 
		var Nearby = "<table>"; 
		Nearby += "";
		
		
		$.each(data, function(index, element) {
			if (Math.abs(Lat-element.LatLong[0]) < 0.1 && Math.abs(Long-element.LatLong[1]) < 0.1){
				if (imgurl != ""){
					Nearby += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></th><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else {
					Nearby += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
		});
		
		Nearby += "</table>";
		document.getElementById("EventList").innerHTML = Nearby;
	});
	
	
	function onLocationSuccess( result ) {
		alert(JSON.stringify( result, null, 4 ));
	}
	function onLocationError( error_msg ) {
		alert( error_msg );
	}
	
	
});





$(document).on('pageshow', '#Categories', function() {
	//$(function() {
	//	$("CategoryList").accordion();
	//}
	
	//var url = "data/testdata2.json";
	var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";
	
	$.getJSON(url, {get_param: 'value' }, function( data ){
		var Activities = "<table class='Activities' > ";
		var Arts = "<table> ";
		var Business = "<table> ";
		var Charity = "<table> ";
		var Family = "<table> ";
		var FoodDrink = "<table> ";
		var Health = "<table> ";
		var Music = "<table> ";
		var Science = "<table> ";
		var Spirit = "<table> ";
		var Other = "<table> ";
		
		$.each(data, function(index, element) {
			if(element.Category == "Arts"){
				if (imgurl != ""){
					Arts += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Arts += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Business"){
				if (imgurl != ""){
					Business += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Business += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Charity & Causes"){
				if (imgurl != ""){
					Charity += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Charity += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Family & Education"){
				if (imgurl != ""){
					Family += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Family += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Food & Drink"){
				if (imgurl != ""){
					FoodDrink += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					FoodDrink += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Health"){
				if (imgurl != ""){
					Health += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Health += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Music"){
				if (imgurl != ""){
					Music += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else {
					Music += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Science & Tech"){
				if (imgurl != ""){
					Science += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Science += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else if(element.Category == "Spirituality"){
				if (imgurl != ""){
					Spirit += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else{
					Spirit += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
			else{
				if (imgurl != ""){
					Other += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				} else {
					Other += "<tr><th colspan=2>" + "<img class='EventLogo' src=" + element.Image + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + element.Date +
					"</td><td><a href=\"" + element.Link + "\" rel=\"external\"> More Info </a>" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + element.ActDesc.slice(0,150) +
					"...</th></tr>";
				}
			}
		});
		Activities += "</table>";
		Arts += "</table>";
		Business += "</table>";
		Charity += "</table>";
		Family += "</table>";
		FoodDrink += "</table>";
		Health += "</table>";
		Music += "</table>";
		Science += "</table>";
		Spirit += "</table>";
		Other += "</table>";
		

		$('.Activities').append(Activities);
		$('.Arts').append(Arts);
		$('.Business').append(Business);
		$('.Charity').append(Charity);
		$('.Family').append(Family);
		$('.FoodDrink').append(FoodDrink);
		$('.Health').append(Health);
		$('.Music').append(Music);
		$('.Science').append(Science);
		$('.Spirit').append(Spirit);
		$('.Other').append(Other);
	});
});
