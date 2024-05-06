import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([312, 8, 12, 7, 45, 51, 23, 123, 44]);

  return (
    <div>
      <div>Hindade koguarv: {hinnad.length} tk</div>
      {hinnad.length > 0 && <button onClick={() => uuendaHinnad([])}>Tühjenda</button>}
      {hinnad.map(h => <div>{h}</div>)}
    </div>
  )
}

export default Hinnad