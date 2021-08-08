/*export function createMap(lat, lon) {
  //creates initial map
  const mymap = L.map('issmap').setview([0, 0], 1);
  
  //adds tiles to map
  const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);
  //creates and applies custom icon
  const issIcon = L.icon({
    iconUrl: './assets/iss.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
  });
  let marker = L.marker([lat, lon], {icon: issIcon}).addTo(mymap);
  mymap.setview([lat, lon], mymap.getZoom());
  marker.setLatLng([lat, lon]);
}
*/