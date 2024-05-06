import React, { useState } from 'react'

function Tooted() {
  const [tooted, muudaTooted] = useState(["Nobe", "Tesla", "BMW"]);

  return (
    <div>
      <button onClick={() => muudaTooted(["BMW", "Audi", "Mercedes", "VW"])}>Pane saksa autod</button>
      {tooted.map(t => <div>{t}</div>)}
    </div>
  )
}

export default Tooted