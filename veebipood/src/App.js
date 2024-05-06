//import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';
import Menyy from './components/Menyy';
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import Tooted from './pages/Tooted';

function App() {
  return (
    <div className="App">

      <Menyy />

      <Routes>
        <Route path="" element={ <Navigate to="avaleht" /> }></Route>
        <Route path="avaleht" element={ <Avaleht/> }></Route>
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Ariklient /> }></Route>
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="hinnad" element={ <Hinnad /> }></Route>
        <Route path="tootajad" element={ <Tootajad /> }></Route>
        <Route path="tooted" element={ <Tooted /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>

    </div>
  );
}

export default App;

// 06.05 - dünaamiline CSS klass, useRef, useState
//        early return.
//        arrays
// 09.05  localStorage, arrays jätk
// 13.05  arrays
