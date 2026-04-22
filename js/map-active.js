$(document).ready(function(){
/*====================================
	OpenStreetMap (Leaflet)
=====================================*/ 	
(function(){

	var map = L.map('myMap', {
		center: [51.507351, -0.127758],
		zoom: 15,
		scrollWheelZoom: false,
		zoomControl: true
	});

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
	}).addTo(map);

	var markerIcon = L.icon({
		iconUrl: 'img/map-marker.png',
		iconSize: [32, 42],
		iconAnchor: [16, 42],
		popupAnchor: [0, -42]
	});

	L.marker([51.507351, -0.127758], {icon: markerIcon}).addTo(map);

}());

});
