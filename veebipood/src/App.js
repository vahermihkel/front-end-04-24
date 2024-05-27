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
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import HaldaTooted from './pages/HaldaTooted';
import MuudaEsindus from './pages/MuudaEsindus';
import MuudaHind from './pages/MuudaHind';
import MuudaTootaja from './pages/MuudaTootaja';
import MuudaToode from './pages/MuudaToode';
import YksEsindus from './pages/YksEsindus';
import YksHind from './pages/YksHind';
import YksTootaja from './pages/YksTootaja';
import YksToode from './pages/YksToode';
import { useState } from 'react';
import { ContactUs } from './pages/ContactUs';

function App() {
  const [kasDarkMode, muudaDarkMode] = useState(localStorage.getItem("darkmode"));

  function paneDarkMode() {
    muudaDarkMode("true");
    localStorage.setItem("darkmode", "true")
  }

  function paneLightMode() {
    muudaDarkMode("false");
    localStorage.setItem("darkmode", "false")
  }

  return (
    <div className={kasDarkMode === "true" ? "App-dark" : "App"}>
      <button onClick={paneDarkMode}>Dark mode</button>
      <button onClick={paneLightMode}>Light mode</button>
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

        <Route path="halda-esindused" element={ <HaldaEsindused /> }></Route>
        <Route path="halda-hinnad" element={ <HaldaHinnad /> }></Route>
        <Route path="halda-tootajad" element={ <HaldaTootajad /> }></Route>
        <Route path="halda-tooted" element={ <HaldaTooted /> }></Route>

        <Route path="muuda-esindus/:index" element={ <MuudaEsindus /> }></Route>
        <Route path="muuda-hind/:index" element={ <MuudaHind /> }></Route>
        <Route path="muuda-tootaja/:index" element={ <MuudaTootaja /> }></Route>
        <Route path="muuda-toode/:index" element={ <MuudaToode /> }></Route>

        <Route path="esindus/:index" element={ <YksEsindus /> }></Route>
        <Route path="hind/:index" element={ <YksHind /> }></Route>
        <Route path="tootaja/:index" element={ <YksTootaja /> }></Route>
        <Route path="toode/:index" element={ <YksToode /> }></Route>
        
        <Route path="contact" element={ <ContactUs /> }></Route>

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
// 9. 20.05
// 10. objektid
// 11. 28.05 UUS ENG PROJEKT 
// 12. 04.06
// 13. 11.06
// 14. 18.06
// 15. 25.06
// 16. 
// 17. 02.07
// 2 nädalane paus
// 18. poolik päev ---> lõpuprojekt
