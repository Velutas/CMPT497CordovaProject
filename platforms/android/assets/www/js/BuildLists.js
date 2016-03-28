//var apigClient = apigClientFactory.newClient();

var imgurl = 'img/AppLogo.png';

$(document).on('pagecreate', '#Nearest', function() {
	//var url = "data/testdata.json";
	var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";

	//Have server only return nearby locations
	$.getJSON(url, {get_param: 'value' }, function( data ){ 
		var Nearby = "<table>"; 
		Nearby += "";
		
		$.each(data, function(index, element) {
			if (imgurl != ""){
				Nearby += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
				"</tr><tr></td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>" +
				"<tr><td>" + "DATES WILL GO HERE" +
				"</td><td>" + "LINK MORE INFO" +
				"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
				"</th></tr>";
			} else {
				Nearby += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
				"</tr><tr></td><td>" + element.Location +
				"</td><td>" + element.Time +
				"</td></tr>" +
				"<tr><td>" + "DATES WILL GO HERE" +
				"</td><td>" + "LINK MORE INFO" +
				"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
				"</th></tr>";
			}
		});
		
		Nearby += "</table>";
		document.getElementById("EventList").innerHTML = Nearby;
	});
});


$(document).on('pagecreate', '#Categories', function() {
	//$(function() {
	//	$("CategoryList").accordion();
	//}
	
	//var url = "data/testdata2.json";
	var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";
	
	$.getJSON(url, {get_param: 'value' }, function( data ){
		var Activities = "<table class='Activities' > ";
		var Arts = "<table> ";
		var FoodDrink = "<table> ";
		var Music = "<table> ";
		var Other = "<table> ";
		
		$.each(data, function(index, element) {
			if(element.Category == "Activities"){
				if (imgurl != ""){
					Activities += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				} else{
					Activities += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				}
			}
			if(element.Category == "Arts"){
				if (imgurl != ""){
					Arts += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				} else{
					Arts += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				}
			}
			if(element.Category == "Food & Drink"){
				if (imgurl != ""){
					FoodDrink += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				} else{
					FoodDrink += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				}
			}
			if(element.Category == "Music"){
				if (imgurl != ""){
					Music += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				} else {
					Music += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				}
			}
			if(element.Category == "Other"){
				if (imgurl != ""){
					Other += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				} else {
					Other += "<tr><td>" + "<img class='EventLogo' src=" + imgurl + "> <h4>" + element.Name + "</h4>" +
					"</tr><tr></td><td>" + element.Location +
					"</td><td>" + element.Time +
					"</td></tr>" +
					"<tr><td>" + "DATES WILL GO HERE" +
					"</td><td>" + "LINK MORE INFO" +
					"</td></tr><tr><th colspan=2 style='font-size: .8em'>" + "Limit the font size for this section..." +
					"</th></tr>";
				}
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
