import React, { useState } from 'react'
// uue rea teeb HTMLs: <br /> või <div> või <p> või <h1>, ülejäänud lähevad vasakult paremale
import esindusedJSON from "../data/esindused.json";
import { Link } from 'react-router-dom';

function Esindused() {
  // linn on muutuvas seisundis ja tema algne väärtus on pandud useState sulgude sisse
  // muutuvad seisundid on ilma jutumärkideta sõnad
  // väärtused on jutumärkidega sõnad
  // kõik mis on inglise keeles on süsteemi poolt antud
  //   muutuja   muutja
  const [linn, muudaLinn] = useState("Tallinn");
  const [keskused, muudaKeskused] = useState(esindusedJSON.slice());

  const reset = () => {
    muudaKeskused(esindusedJSON.slice());
  }

  const sorteeriAZ = () => {
    keskused.sort((a, b) => a.nimi.localeCompare(b.nimi));
    muudaKeskused(keskused.slice());
  }

  const sorteeriZA = () => {
    keskused.sort((a, b) => b.nimi.localeCompare(a.nimi));
    // keskused.reverse();
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedArv = () => {
    keskused.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedArvKah = () => {
    keskused.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    keskused.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    muudaKeskused(keskused.slice());
  }

  const filtreeriKesOn9Tahelised = () => {
    const vastus = keskused.filter(keskus => keskus.nimi.length === 9);
    muudaKeskused(vastus);
  }

  const filtreeriKellelVahemalt7Tahte = () => {
    const vastus = keskused.filter(keskus => keskus.nimi.length >= 7);
    muudaKeskused(vastus);
  }

  const filtreeriKellelOnLyhendIs = () => {
    const vastus = keskused.filter(keskus => keskus.nimi.includes("is") === true);
    muudaKeskused(vastus);
  }

  const filtreeriKesLoppebETahega = () => {
    const vastus = keskused.filter(keskus => keskus.nimi.endsWith("e") === true);
    muudaKeskused(vastus);
  }
                                            //  012              012
  const filtreeriKellelOn3sTahtI = () => {   // Kristiine        Ülemiste
    const vastus = keskused.filter(keskus => keskus.nimi[2] === "i"); // keskus.charAt(2) === "i"
    muudaKeskused(vastus);
  }

  // Ülemiste, Kristiine, Vesse
  //    8 + 9 + 5 ---> 22
  // let summa   ---> saan muutujat korduvalt muuta

  function kokku() {
    let summa = 0;
    // summa = summa + 8;
    // summa = summa + 9;
    // summa = summa + 5;
    // ["Ülemiste", "Kristiine", "Vesse"]
    //      "Ülemiste" =>    8  =  0    + 8
    //     "Kristiine" =>   17  =  8    + 9
    //         "Vesse" =>   22  = 17    + 5
    keskused.forEach(k => summa = summa + k.nimi.length);
    return summa;
  }

  return (
    <div>
      <div>Aktiivne linn: {linn}</div>
      <button onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button onClick={() => muudaLinn("Narva")}>Narva</button>
      <button onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn==="Tallinn" &&
      <div>
        <div>Tähtede arv kokku: {kokku()} tk</div>
        <button onClick={reset}>Reset</button>
        <br /><br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedArv}>Sorteeri tähtede arvu järgi kasvavalt</button>
        <button onClick={sorteeriTahedArvKah}>Sorteeri tähtede arvu järgi kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        <br /><br />
        <button onClick={filtreeriKesOn9Tahelised}>Jäta alles 9 tähelised</button>
        <button onClick={filtreeriKellelVahemalt7Tahte}>Jäta alles kellel on vähemalt 7 tähte</button>
        <button onClick={filtreeriKellelOnLyhendIs}>Jäta alles kes sisaldab lühendit "is"</button>
        <button onClick={filtreeriKesLoppebETahega}>Jäta alles kes lõppeb "e" tähega</button>
        <button onClick={filtreeriKellelOn3sTahtI}>Jäta alles kellel on 3s täht "i"</button>

        {keskused.map((k, index) => 
          <div key={index}>
            {k.nimi}
            <Link to={"/esindus/" + index}>Vt detailsemalt</Link>
          </div>)}
        {/* <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div> */}
      </div>}
      
      {linn==="Tartu" &&
      <div>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused