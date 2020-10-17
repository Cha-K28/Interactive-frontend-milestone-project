function getData(cb) {

var xhr = new XMLHttpRequest();


xhr.open("GET", "https://api.openchargemap.io/v3/poi/?output=json&countrycode=IE");
xhr.send();


xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.response));        
    }
    


};
    
}

    getData(function(data) {
    // loop through and add to array [{lat: 54.508650, lng: -1.353513}, {lat: 54.508650, lng: -1.353513}, {lat: 54.508650, lng: -1.353513}]
    //let markers = data.map(function(location, i){
    //            return new google.maps.Marker({
    //                position: location, 
    //            });
    
    for(var index in data){
        console.log(data[index]['AddressInfo']['Latitude'] + ' ' + data[index]['AddressInfo']['Longitude'] + ' ' + data[index]['AddressInfo']['Town']);        
    }   
    
});

