function initialiseGoogleMap() {
	var latlng;
	var lat = 44.5403;
	var lng = -78.5463;
	var map = $('#map');
	var mapCanvas = map.get(0);
	var map_styles = [
		{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]},
		{"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]},
		{"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]},
		{
			"featureType": "road.arterial",
			"stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]
		},
		{"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]},
		{"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]},
		{"featureType": "administrative.province", "stylers": [{"visibility": "off"}]},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
		}
	];

	if ($('html').hasClass('theme-skin-dark')) {
		map_styles = [
			{"stylers": [{"hue": "#ff1a00"}, {"invert_lightness": true}, {"saturation": -100}, {"lightness": 33}, {"gamma": 0.5}]},
			{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#2D333C"}]}
		];
	}


	if (map.data("latitude")) lat = map.data("latitude");
	if (map.data("longitude")) lng = map.data("longitude");

	latlng = new google.maps.LatLng(lat, lng);

	// Map Options
	var mapOptions = {
		zoom: 14,
		center: latlng,
		scrollwheel: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: map_styles
	};

	// Create the Map
	map = new google.maps.Map(mapCanvas, mapOptions);

	var marker = new Marker({
		map: map,
		position: latlng,
		icon: {
			path: SQUARE_PIN,
			fillColor: '',
			fillOpacity: 0,
			strokeColor: '',
			strokeWeight: 0
		},
		map_icon_label: '<span class="map-icon map-icon-postal-code"></span>'
	});

	// Keep Marker in Center
	google.maps.event.addDomListener(window, 'resize', function () {
		map.setCenter(latlng);
	});
};