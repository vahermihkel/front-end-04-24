import { useState } from 'react';
import Map from '../../components/Map';
import { Button } from '@mui/material';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.8215, 25.7636], zoom: 7})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>

    <Button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 14})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4358, 24.7570], zoom: 14})}>Viru keskus</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 14})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7306], zoom: 14})}>Tasku keskus</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;