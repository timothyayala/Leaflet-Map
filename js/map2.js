let map2 = L.map('map2').setView([20.0, 0.0], 2); 

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGltYXlhbGE3IiwiYSI6ImNtM3Q2a3llYzA1OTkyam9yMHE4czJhN3MifQ.BkAr2_-wjiHzAojOUAY4Ow'
}).addTo(map2);

for (let i = 0; i < places.length; i++) {
    let place = places[i];
    L.marker([place.latitude, place.longitude]).addTo(map2)
        .bindPopup(`<strong>${place.placeName}</strong><br>${place.description}`);
}
