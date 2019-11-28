$(document).ready(function(){
    

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var title = ["first","second","third","uluru", "The New Software Revolution"];
    
    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
        { lat: -25.363, lng: 131.044 },
        { lat: 55.9533, lng: -3.1883 }
    ];
    var uluru = { lat: -25.363, lng: 131.044 };
    var edinburgh = { lat: 55.9533, lng: -3.1883 };

    var markers = locations.map(function(locations, i) {
        return new google.maps.Marker({
            position: locations,
            map: map,
            title: title[i%title.length]
            
        });
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

        // content in info window
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">The New Software Revolution</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Info</b>, The cells in your body are like computer software: they are "programmed" to carry out specific' +
        'functions at specific times. If we can better understand this process, we could unlock the ability to ' +
        'reprogram cells ourselves, says computational biologist Sara-Jane Dunn. In a talk from the cutting-' +
        'edge of science, she explains how her team is studying embryonic stem cells to gain a new  ' +
        'understanding of the biological programs that power life -- and develop "living software" that could  ' +
        'transform medicine, agriculture and energy. ' +
        '<br><button onClick = "showVid()" id = "contentButton">Click Me</button> ' +
        '</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    /*var marker = new google.maps.Marker({
        position: edinburgh,
        map: map,
        title: 'The New Software Revolution'
    });*/
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

//show/hide video toggle.
function showVid() {
    $("#hideMe").toggleClass("hidden")
    //add el.url = url code. after url var has been sat up
};
    
    
})//doc.ready end