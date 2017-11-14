<?php
require_once 'vendor/autoload.php';

use \Whoops\Run,
	\Whoops\Handler\PrettyPageHandler;

	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	$whoops = new Run;
	$whoops->pushHandler(new PrettyPageHandler);
	$whoops->register();

	// 176.155.170.89
	// 81.229.209.139
	$_SERVER['REMOTE_ADDR'] = $_SERVER['REMOTE_ADDR'] == "127.0.0.1" ? "176.155.170.89" : $_SERVER['REMOTE_ADDR'];



	$ipinfo = json_decode(file_get_contents("http://ip-api.com/json/{$_SERVER['REMOTE_ADDR']}"));
	var_dump($ipinfo);
	$record = new stdClass();
	$record->location = new stdClass();
	$record->location->latitude = $ipinfo->lat;
	$record->location->longitude = $ipinfo->lon;

	// ----------- GOOGLE YOUTUBE ----------------

	// $client = new Google_Client();
	// API Key:  AIzaSyAtaOUQKQK4Wdxj10yUw0jl03iDpu0jNrk
	// $client->setDeveloperKey("AIzaSyAtaOUQKQK4Wdxj10yUw0jl03iDpu0jNrk");

	// $youtube = new Google_Service_YouTube($client);

	// $response = $youtube->search->listSearch('id,snippet',
	//  [
	//      'q' => 'Wilou017',
	//      'order' => 'relevance',
	//      'maxResults' => 50,
	//      'type' => 'video'
	//  ]
	// );
	//      // channelId
	// file_put_contents('videos.json', json_encode($response, JSON_PRETTY_PRINT));

	// var_dump($response['items']);

	// ------------ END GOOGLE YOUTUBE -------------


?>
<body>
	<div id="map" style="width: 100%; height: 480px;"></div>
	<div style="margin-bottom: 100px">
		<input id="address" type="textbox" value="">
		<input type="button" value="Encode" onclick="codeAddress()">
	</div>
	<script async defer
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtaOUQKQK4Wdxj10yUw0jl03iDpu0jNrk&libraries=places&callback=myinitapp">
</script>
<script type="text/javascript">
	var geocoder;
	var map;
	var marker;
	var lat = <?= $record->location->latitude ?>;
	var lng = <?= $record->location->longitude ?>;
	var input = /** @type {!HTMLInputElement} */(
		document.getElementById('address'));



	function initialize() {
		console.log('INITIALISING');
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(lat, lng);
		var mapOptions = {
			zoom: 10,
			center: latlng
		}
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		geocoder.geocode({'location': latlng}, function(results, status) {
			if (status === 'OK') {
				if (results[1]) {
					marker = new google.maps.Marker({
						map: map,
						position: latlng
					});
					var mapIconMarker = {
						url: "img/map-marker-128.png",
						size: 35
					}
					marker.setIcon(/** @type {google.maps.Icon} */({
						url: mapIconMarker.url,
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(mapIconMarker.size/2, mapIconMarker.size),
						scaledSize: new google.maps.Size(mapIconMarker.size, mapIconMarker.size)
					}));
					infowindow.setContent('<div><strong>Votre Position</strong><br>' + results[1].formatted_address);
					infowindow.open(map, marker);
				} else {
					window.alert('No results found');
				}
			} else {
				window.alert('Geocoder failed due to: ' + status);
			}
		});


		// map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
		var autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.bindTo('bounds', map);

		var infowindow = new google.maps.InfoWindow();
		autocomplete.addListener('place_changed', function() {
			infowindow.close();
			marker.setVisible(false);
			var place = autocomplete.getPlace();
			if (!place.geometry) {
				// User entered the name of a Place that was not suggested and
				// pressed the Enter key, or the Place Details request failed.
				window.alert("No details available for input: '" + place.name + "'");
				return;
			}

			// If the place has a geometry, then present it on a map.
			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(17);  // Why 17? Because it looks good.
			}
			marker.setPosition(place.geometry.location);
			marker.setVisible(true);

			var address = '';
			if (place.address_components) {
				address = [
				(place.address_components[0] && place.address_components[0].short_name || ''),
				(place.address_components[1] && place.address_components[1].short_name || ''),
				(place.address_components[2] && place.address_components[2].short_name || '')
				].join(' ');
			}

			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
			infowindow.open(map, marker);
		});
	}

	function codeAddress() {
		var address = input.value;
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == 'OK') {
				map.setCenter(results[0].geometry.location);
				console.log(results[0].geometry.location.lat());
				console.log(results[0].geometry.location.lng());
				marker.setPosition(results[0].geometry.location);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}

	function myinitapp ()
	{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				lat = position.coords.latitude;
				lng = position.coords.longitude;
				console.log(position.coords);
				initialize();
			}, function() {
				console.warn('Error Geo loclisation');
				lat = <?= $record->location->latitude ?>;
				lng = <?= $record->location->longitude ?>;
				initialize();
			});
		} else {
			console.warn('NO: Geo loclisation');
			// Browser doesn't support Geolocation
			lat = <?= $record->location->latitude ?>;
			lng = <?= $record->location->longitude ?>;
			initialize();
		}
	}
</script>
</body>
