document.addEventListener('deviceready', function() {
  // reate a map instance
  var map = plugin.google.maps.Map.getMap();
  
  // Waiting for the MAP_READY event
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapInit);
}, false);

function onMapInit(map) {
  
  // Show the map dialog when the button is clicked.
  var button = document.getElementById("button");
  button.addEventListener("click", function() {
    
    map.showDialog();
    
  }, false);
  
  // The MAP_CLOSE event will be fired when the map dialog is closed.
  map.addEventListener(plugin.google.maps.event.MAP_CLOSE, function() {
    
    alert("The map dialog is closed");
    
  });
}