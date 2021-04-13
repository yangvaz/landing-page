import Leaftlet from 'leaflet';

import mapMarkerImg from '../assets/mapMarker.png';

const mapIcon = Leaftlet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 58],
  iconAnchor: [29, 58],
  popupAnchor: [0, -58]
})

export default mapIcon;