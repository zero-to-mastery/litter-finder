// Geolocation functionality for the little finder project
// using Google Maps JavaScript API
// ---- Get current location -------

// TODO: add file to store locations
var locations = [];

function initMap() {
	var infoWindow;
	var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
	infoWindow = new google.maps.InfoWindow;
	
	// Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
		var marker = new google.maps.Marker({
			position: pos,
			map: map,
			title: "Location found!"
			});
		map.setZoom(14);
        map.setCenter(pos);
			
        }, function() {
          handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    }
      
      function handleLocationError(browserHasGeolocation, pos) {
               alert(browserHasGeolocation ?
             'Error: The Geolocation service failed.' :
             'Error: Your browser doesn\'t support geolocation.');
      }
	
	/*
	// Add some markers to the map.
	   var markers = locations.map(function(location, i) {
			console.log('executing markers..., location: ', location);
			return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length]
			});
		});
	// Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	 */
}

//TODO: Add event listener for the button

