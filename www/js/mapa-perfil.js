var map;
var mapOptions;

function cargarMapaPerfil(x, y)
{    
	var center = new google.maps.LatLng(x, y);
	console.log(x);
	console.log(y);

	mapOptions =
	{
		center: center,
		zoom:10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		draggable:false,
		panControl:false,
		zoomControl:false,
		mapTypeControl:false,
		scaleControl:false,
		streetViewControl:false,
		overviewMapControl:false,
	};
	
	map = new google.maps.Map(document.getElementById('mapaperfil'), mapOptions);
	
	var marker = new google.maps.Marker(
	{
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: center,
		icon: 'img/moneda_takara.png'
	});
}

// CODIGO PRO QUE RESUELVE EL CORTE DE LOS MAPAS (Hora de resolución: 4:41h)
$('#page3').on('pageshow',function(event)
{
	google.maps.event.trigger(map, 'resize');
    map.setOptions(mapOptions);
});

$('#page5').on('pageshow',function(event)
{
	google.maps.event.trigger(mapB, 'resize');
    mapB.setOptions(mapOptionsB);
});
