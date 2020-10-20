   
var locations = [];


// This is method is used to call API to get charging points in JSON format
function getData(cb) {

    var xhr = new XMLHttpRequest(); // sourced from  interactive mini project


        xhr.open("GET", "https://api.openchargemap.io/v3/poi/?output=json&countrycode=IE");
        xhr.send();


        xhr.onreadystatechange = function() {
            // If success 
            if(this.readyState == 4 && this.status == 200) {
                // Parse response into JSON format
                cb(JSON.parse(this.response));        
            }
        };    
};


getData(function(data) {

    for(var index in data){
        var loc = {};  // create the object called 'loc'
        loc["lat"] = data[index]['AddressInfo']['Latitude'];  // assign {'lat':} for loc-Object
        loc["lng"] = data[index]['AddressInfo']['Longitude'];  // assign {'lng':} for loc-Object
        loc["town"] = data[index]['AddressInfo']['Town']; // used in the info window
        locations.push(loc);  // push loc-Object into locations-array
    }
    initMap();
});
// Render map 
// sourced from google maps api tutorials
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.361838, lng: -7.654365 }, // Center of Ireland
        zoom: 6.5,
    });

    // Display charging point markers on map 
    // sourced from google maps api tutorials
    var markers = locations.map(function(location, i) {
        const infowindow = new google.maps.InfoWindow({
            content: location.town,
        });
        let mark =  new google.maps.Marker({
            position: location,
        });
        // Handle click event
        mark.addListener("click", () => {
            infowindow.open(map, mark);
        });

        return mark;
    });

    
    var markerCluser = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });              
};
