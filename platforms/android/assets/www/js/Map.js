var map
/*
document.onload = function{
	Location = map.getMyLocation(GPS, onSuccess, onError);
	alert(Location);
	
	var GOOGLE = new plugin.google.maps.LatLng(37.422858, -122.085065);
	
	map.setCenter(GOOGLE);
	map.setZoom(15);
}
*/

var GPS = {
	enableHighAccuracy: true
};

function onSuccess(Location){
	alert(Location);
}
function onError(Location){
	alert("Oh...");
}


document.addEventListener("deviceready", function(){
		var div = document.getElementById("MapCanvas");
		map = plugin.google.maps.Map.getMap(div);
		
		Location = map.getMyLocation(GPS, onSuccess(Location), onError);
		map.setLocation(Location);
	
		map.addEventListener(plugin.google.maps.event.MAP_READY, MapReady);
    }, false);

function MapReady(){
    var button = document.getElementById("MapFullScreen");
	
    button.addEventListener("click", onBtnClicked, false);
}

function onBtnClicked(){
    map.showDialog();
}


function CloseMap(){
	//map.setVisible(false);
	map.remove();
}