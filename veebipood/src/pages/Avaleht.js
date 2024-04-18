import React, { useState } from 'react'

function Avaleht() {
  const [laigitud, muudaLaigitud] = useState(true);

  return (
    <div>
      {laigitud === false && <img onClick={() => muudaLaigitud(!laigitud)} src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img onClick={() => muudaLaigitud(!laigitud)} src="/laigitud.svg" alt="" />}
      {/* <button onClick={() => muudaLaigitud(true)}>Muuda like peale</button>
      <button onClick={() => muudaLaigitud(false)}>Võta like maha</button> */}

{/* ! -> tähendab booleani muutuja ees, et ole vastupidine mis sa enne olid ehk
kui enne oli false, siis nüüd on true ja vastupidi
*/}
      {/* <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button> */}
    </div>
  )
}

export default Avaleht