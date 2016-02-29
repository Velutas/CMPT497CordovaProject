var map
var GPS = {
	enableHighAccuracy: true
};

/* Main function */
document.addEventListener("deviceready", function(){
		var div = document.getElementById("MapCanvas");
		
		/* Using set location of Vancouver for now, since data on events is 
			currently specific to the Vancouver area.*/
		var City = new plugin.google.maps.LatLng(49.2827, -123.1207);
		//alert("Data: ");
		map = plugin.google.maps.Map.getMap(div);
		
		// Get location of user => Need to build onSuccess and onError 
		/*
		map.getMyLocation(opts, onSuccess, onError);
		*/
		
		/* Re-enable map after navigating away */
		map.setVisible(true);
		
		/* Enable button to make map full screen */
		map.addEventListener(plugin.google.maps.event.MAP_READY, MapReady);
		
		/* Set starting location and zoom level for map */ 
		map.addEventListener(plugin.google.maps.event.MAP_READY, function(){
			map.setCenter(City);
			map.setZoom(13);
		});
		
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