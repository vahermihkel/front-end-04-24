import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import ostukorvJSON from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState (ostukorvJSON.slice())
 
  function tyhjenda() {
    ostukorvJSON.splice(0); // splice abil kustutame, 0 --> esimesest alates
    uuendaOstukorv(ostukorvJSON.slice()); // slice abil võtame mälukoha ära
  }

  // function kustutaEsimene() {
  //   ostukorvJSON.splice(0,1); // esimene nr mitmendat, teine nr mitu tk
  //   uuendaOstukorv(ostukorvJSON.slice());
  // }

  // function kustutaTeine() {
  //   ostukorvJSON.splice(1,1);
  //   uuendaOstukorv(ostukorvJSON.slice());
  // }

  // function kustutaKolmas() {
  //   ostukorvJSON.splice(2,1);
  //   uuendaOstukorv(ostukorvJSON.slice());
  // }

  // function kustutaNeljas() {
  //   ostukorvJSON.splice(3,1);
  //   uuendaOstukorv(ostukorvJSON.slice());
  // }

  function kustuta(jrknr) {
    ostukorvJSON.splice(jrknr,1); // jrknr - tuleb <button> kaudu, 1 - mitu tk
    uuendaOstukorv(ostukorvJSON.slice());
  }

  function lisaRedBull() {
    ostukorvJSON.push("Red Bull");
    uuendaOstukorv(ostukorvJSON.slice());
  }

  function lisaLoppu(toode) {
    ostukorvJSON.push(toode);
    uuendaOstukorv(ostukorvJSON.slice());
  }

  return (
    <div>
      <div>Koguarv: {ostukorv.length} tk</div>

      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <button onClick={lisaRedBull}>Lisa Red bull</button>
      {ostukorv.map((toode, jrknr) => 
        <div key={jrknr}>
          {jrknr}.
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div>{toode.aktiivne}</div>
          <button onClick={() => kustuta(jrknr)}>x</button>
          <button onClick={() => lisaLoppu(toode)}>Lisa lõppu üks juurde</button>
        </div>)}
  
      <br /><br />
      {ostukorv.length === 0 && 
      <Link to="/avaleht">
        Ostukorv on tühi. Mine avalehele.
      </Link>}
    </div>
  )
}
export default Ostukorv


// Coca, Fanta, Sprite, Vichy, Limpa
  // Kuvada välja üksteise all kõik tooted läbi useState ja array ehk []

  // Tühjendamine
  // Koguarv
  // Kui on 0 toodet, siis ära näita tühjenda nuppu
  // Kui on 0 toodet, siis näita "Ostukorv on tühi <Link>"
