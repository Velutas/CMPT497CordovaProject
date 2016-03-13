var map;
var GPS = {
	enableHighAccuracy: true
};
var icons = {
  iconImage:'www/img/MapIcon.png'
};

var url = "data/testdata.json";
//var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";

var ActivityTitle = "Test";
var ActivityTime = "Aughh";



/*$(document).on('pagecreate', '#Test', function() {
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
		document.getElementById("Test").innerHTML = Nearby;
	});
});*/



/* Main function */
document.addEventListener("deviceready", function(){
	
		/*$.getJSON(url, function(data){
			
			alert("I did something!");
		});*/
	
	
	
	
		var div = document.getElementById("MapCanvas");
		
		/* Using set location of Vancouver for now, since data on events is 
			currently specific to the Vancouver area.*/
		var City = new plugin.google.maps.LatLng(49.2827, -123.1207);
		var ActivityLocation = new plugin.google.maps.LatLng(49.28, -123.11);
		
		map = plugin.google.maps.Map.getMap(div);
		
		
		/* Re-enable map after navigating away */
		map.setVisible(true);
		
		/* Enable button to make map full screen */
		map.addEventListener(plugin.google.maps.event.MAP_READY, MapReady);
		
		/* Set starting location and zoom level for map */ 
		map.addEventListener(plugin.google.maps.event.MAP_READY, function(){
			map.setCenter(City);
			map.setZoom(14);
			map.setBackgroundColor("#333333");
			
			// Get location of user => Need to build onSuccess and onError 
			//map.getMyLocation(onSuccess, onError);
			
			// Create map markers at appropriate locations
			map.addMarker({
				position: City,
				icon: {
					'url': icons.iconImage,
					'size': {
						'width': 25,
						'height': 25
					}
				},
				'title': "First Pin",
				'snippet': "",
				"styles": {
					"maxWidth": "60%" 
				}
			}, 	function(marker) {
					marker.showInfoWindow();
					marker.setTitle(ActivityTitle);
					marker.setSnippet(ActivityTime);
					
					map.addEventListener("ZoomOut", function(){
						marker.setVisible(false);
					});
					map.addEventListener("ZoomIn", function(){
						marker.setVisible(true);
					});
				
			});
			
		});
		
		map.on(plugin.google.maps.event.CAMERA_CHANGE, onMapCameraChanged);
		
}, false);


/* Function for making map full screen */ 
function MapReady(){
    var button = document.getElementById("MapFullScreen");
    button.addEventListener("click", onBtnClicked, false);
}

/* Enable map to be minimized and maximixed on click */ 
function onBtnClicked(){
    map.showDialog();
}

/* Prevent map from displaying on additional pages */ 
function CloseMap(){
	map.setVisible(false);
	//map.remove();
}

function onMapCameraChanged(position) {
	map.getCameraPosition(function(camera) {
		if (camera.zoom < 14 ){
			map.trigger("ZoomOut");
		}
		if (camera.zoom > 14 ){
			map.trigger("ZoomIn");
		}
	});
}