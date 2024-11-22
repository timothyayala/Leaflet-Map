let map1 = L.map('map1').setView([40.7128, -74.0060], 12); // New York City

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGltYXlhbGE3IiwiYSI6ImNtM3Q2a3llYzA1OTkyam9yMHE4czJhN3MifQ.BkAr2_-wjiHzAojOUAY4Ow'
}).addTo(map1);

let marker1 = L.marker([40.758896, -73.985130]).addTo(map1).bindPopup("Times Square").openPopup();
let marker2 = L.marker([40.748817, -73.985428]).addTo(map1).bindPopup("Empire State Building");
let marker3 = L.marker([40.689247, -74.044502]).addTo(map1).bindPopup("Statue of Liberty");
let marker4 = L.marker([40.730610, -73.935242]).addTo(map1).bindPopup("Brooklyn");
console.log(map1);