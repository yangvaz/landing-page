import Leaftlet from 'leaflet';

import mapMarkerImg from '../assets/mapMarker.png';

const mapIcon = Leaftlet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
})

export default mapIcon;