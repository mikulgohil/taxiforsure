
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var bangalore = new google.maps.LatLng(12.971599, 77.594563);
  var mapOptions = {
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: bangalore
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
  
}


function calcRoute(st,ed) {


// var start = start;
// var end = end;
if(st){
  
  var start = st;
  var end = ed;
}else{  
    var start = document.getElementById('pick').value + ", bangalore";
    var end = document.getElementById('drop').value + ", bangalore";
}


  



  // var start = document.getElementById('pick').value + ", bangalore";
  // var end = document.getElementById('drop').value + ", bangalore";
  
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  //var directionsDisplay = new google.maps.DirectionsRenderer({ 'map': map }); 
 // console.log(google.maps.geometry.spherical.computeDistanceBetween (start, end));
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

    