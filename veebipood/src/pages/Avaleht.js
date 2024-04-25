import React, { useState } from 'react'

// kollane - funktsioonid
// helesinine - HTMLs atribuut onClick, className, disabled
// tavaline sinine - HTMLs muutuja, JavaScriptis muutuja
// tumesinine - liigitus / sissekirjutatud sõna JavaScriptis/HTMLs
//      HTMLs function, const, true/false.
// oranž - string
// heleroheline - number
// tumeroheline - kommentaar
// valge - erinevad märgid
// lilla - käsklused    import, export, if, return
// {{{{{{{{{{{{{{{}}}}}}}}}}}}}}}
// märgid värvuvad järjekorras: kollane, lilla, sinine, kollane, lilla, sinine

function Avaleht() {
  const [laigitud, muudaLaigitud] = useState(true); // kahendväärtus e boolean. saan tagurpidi keerata
  // sisselogimine, registreerumine, makstud, täisealine, ostukorvis, aktiivne, laos
  const [kogus, muudaKogus] = useState(0); // number. saan kokku liita. korrutamine/jagamine/lahutamine. 
  //suurem/väiksem. ostukorvi kogusumma, emailide/teavituste kogusumma, toodete koguarv, filtris olev arv 
  const [sonum, muudaSonum] = useState("Muuda kogust!"); // sõna e string. isikukood, postiindeks, telnr
  //võtta esimene täht, mitu tähemärki, vt kas sisaldab sellist lühendit, suurteks tähtedeks

  function nulli() {
    muudaKogus(0);
    muudaSonum("Kogus nullitud!");
  }

  function vahenda() {
    muudaKogus(kogus - 1);
    muudaSonum("Kogus vähendatud!");
  }

  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Kogus suurendatud!");
  }

  return (
    <div>
      {laigitud === false && <img onClick={() => muudaLaigitud(!laigitud)} src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img onClick={() => muudaLaigitud(!laigitud)} src="/laigitud.svg" alt="" />}
      {/* <button onClick={() => muudaLaigitud(true)}>Muuda like peale</button>
      <button onClick={() => muudaLaigitud(false)}>Võta like maha</button>

! -> tähendab booleani muutuja ees, et ole vastupidine mis sa enne olid ehk
kui enne oli false, siis nüüd on true ja vastupidi

      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button>
      
      Täpselt sama:
       onClick={() => nulli()}
       onClick={nulli}
      
      Kui kutsun välja otse useState muutmise funktsiooni, siis on ainuke viis
      onClick={() => muudaLaigitud(!laigitud)}

      kui täidan funktsiooni järgseid sulge, pean panema () => ette
      
      */}
      <br /><br />

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht