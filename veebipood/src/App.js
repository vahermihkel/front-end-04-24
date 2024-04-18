//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">

      <Link to="avaleht">
        <img className="pilt" src="https://p.turbosquid.com/ts-thumb/Y3/Cuem5B/oz/frame/jpg/1655990894/1920x1080/turn_fit_q99/afb8f7c8f7f6cc99ce88d44010e88db8ec14f2fc/frame-1.jpg" alt="" />
      </Link>

      <Link to="esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="arikliendile">
        <button className="nupp">Ärikliendile</button>
      </Link>

      <Link to="osta-kinkekaart">
        <button className="nupp">Osta kinkekaart</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht/> }></Route>
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Ariklient /> }></Route>
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
