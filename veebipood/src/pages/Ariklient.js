import React from 'react'
import Tingimused from '../components/Tingimused'
import Aeg from '../components/Aeg'
import Teostamine from '../components/Teostamine'
import EiKuulu from '../components/EiKuulu'
import Oigused from '../components/Oigused'
import Defekt from '../components/Defekt'

function Ariklient() {
  return (
    <div>
      Garantii tingimused <br />
GARANTII TINGIMUSED: <br />
Salvesta .pdf kujul siit <br />
<br />
<Tingimused />
<Aeg />
<Teostamine />
<EiKuulu />
<Oigused />
<Defekt />
NB! Arvutitark OÜ ei kohustu tagasi ostma või ümber vahetama töökorras tooteid, mille klient on ostnud kauplusest kohapealt. Konkreetse toote tagastamise või vahetamise võimaluse ja tingimused otsustab garantiiosakond.
<br />
Juhul kui garantiiremonti toodud seadmel ei leita valmistamisprotsessist või kasutatud materjalidest põhjustatud viga, võidakse töö tellijalt nõuda remonditellimuse käsitlustasu kuni €36.-. Esimese kuue kuu jooksul tarbijale tasu ei rakendata.
    </div>
  )
}

export default Ariklient