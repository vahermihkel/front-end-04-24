import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4220, 24.7920]}>
        <Popup>
          Ülemiste keskus. <br /> Avatud 9-20
        </Popup>
      </Marker>
      <Marker position={[59.4270, 24.7232]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[59.4358, 24.7570]}>
        <Popup>
          Viru keskus. <br /> Avatud 8-22
        </Popup>
      </Marker>
      <Marker position={[58.3779, 26.7306]}>
        <Popup>
          Tasku keskus. <br /> Avatud 10-22
        </Popup>
      </Marker>
    </MapContainer>

    {/* 59.436781928074396, 24.75700668068783 */}
  </div>)
}

export default Map; 