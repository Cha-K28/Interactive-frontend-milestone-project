const labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    
var locations = [];


function getData(cb) {

    var xhr = new XMLHttpRequest();


        xhr.open("GET", "https://api.openchargemap.io/v3/poi/?output=json&countrycode=IE");
        xhr.send();


        xhr.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.response));        
            }
        };    
};


getData(function(data) {
    // loop through and add to array [{lat: 54.508650, lng: -1.353513}, {lat: 54.508650, lng: -1.353513}, {lat: 54.508650, lng: -1.353513}]
    for(var index in data){
        var loc = {};  // create the object called 'loc'
        loc["lat"] = data[index]['AddressInfo']['Latitude'];  // assign {'lat':} for loc-Object
        loc["lng"] = data[index]['AddressInfo']['Longitude'];  // assign {'lng':} for loc-Object
        locations.push(loc);  // push loc-Object into locations-array
    }
    initMap();
});

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.361838, lng: -7.654365 },
        zoom: 6.5,
    });

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    
    var markerCluser = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });              
};
