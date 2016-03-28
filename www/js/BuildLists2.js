//var apigClient = apigClientFactory.newClient();

$(document).on('pagecreate', '#Nearest', function() {
	//var url = "data/testdata.json";
	var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";
	var url2 = "http://api.amp.active.com/v2/search/?city=vancouver&state=BC&country=Canada&current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=v4qaecbs2xkp5cgeqagfsdu5"
	
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
	
	 $.ajax({
        type: "GET",
        url: url2,
        async:true,
        dataType : 'json',   //you may use jsonp for cross origin request
        crossDomain:true,
        success: function(data, status, xhr) {
			$.each(data, function(index, element) {
				alert(data);
			});
        }
    });
});
