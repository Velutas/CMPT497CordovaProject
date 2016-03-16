//var apigClient = apigClientFactory.newClient();

var map;
var GPS = {
	enableHighAccuracy: true
};
var icons = {
  iconImage:'www/img/MapIcon.png'
};

//var url = "data/testdata2.json";
var url = "https://mjdgbkaht5.execute-api.us-west-2.amazonaws.com/SideTracked";

//var ActivityTitle = "";
//var ActivityTime = "";


/* Main function */
document.addEventListener("deviceready", function(){
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
		
		/*Set so that it is possible to navigate away from the map page*/
		map.addEventListener(plugin.google.maps.event.MAP_READY, NavigateAway);
		
		
		
		
		
		/* Set starting location and zoom level for map */ 
		map.addEventListener(plugin.google.maps.event.MAP_READY, function(){
			map.setCenter(City);
			map.setZoom(14);
			map.setBackgroundColor("#333333");
			
			// Get location of user => Need to build onSuccess and onError 
			//map.getMyLocation(onSuccess, onError);
			
			/*$.ajaxSetup({
				headers:{
					"Access-Control-Allow-Origin:": "*"
				}
			})*/
			
			
			$.getJSON(url, function(data){
				$.each(data, function(index, element) {
					var ActivityTitle = element.Name;
					var ActivityTime = element.Time;
					var NewLocation = new plugin.google.maps.LatLng(element.LatLong[0], element.LatLong[1]);
					
					// Create map markers at appropriate locations
					map.addMarker({
						position: ActivityLocation,
						icon: {
							'url': icons.iconImage,
							'size': {
								'width': 18,
								'height': 18
							}
						},
						'title': "",
						'snippet': "",
						"styles": {
							"maxWidth": "60%" 
						}
					}, 	function(marker) {
							marker.setPosition(NewLocation);
							marker.setTitle(ActivityTitle);
							marker.setSnippet(ActivityTime);
							
							map.addEventListener("ZoomOut", function(){
								marker.setVisible(false);
							});
							map.addEventListener("ZoomIn", function(){
								marker.setVisible(true);
								marker.setIcon({
									'url': icons.iconImage,
									'size': {
										'width' : 18,
										'height': 18
									}
								});
							});
							map.addEventListener("ZoomMax", function(){
								marker.setVisible(true);
								marker.setIcon({
									'url': icons.iconImage,
									'size': {
										'width' : 12,
										'height': 12
									}
								});
							});
						
					});
				});
				
				//alert("It worked!");
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


/*Set so that it is possible to navigate away*/
function NavigateAway(){
	var button = document.getElementById("NavigateAway");
	button.addEventListener("tap", CloseMap, false);
	
}

/* Prevent map from displaying on additional pages */ 
function CloseMap(){
	map.setVisible(false);
	//map.remove();
}

function onMapCameraChanged(position) {
	map.getCameraPosition(function(camera) {
		if (camera.zoom < 12 ){
			map.trigger("ZoomOut");
		}
		if (camera.zoom <= 13  && camera.zoom >= 12){
			map.trigger("ZoomMax");
		}
		if (camera.zoom > 13 ){
			map.trigger("ZoomIn");
		}
	});
}