import React, { useEffect, useState } from 'react'

function ParcelMachines() {
  const [pms, setPms] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json()) // terve API päringu tagastus (errorid, mahud, tüübid.. metadata)
      .then(data => setPms(data)) // reaalne tagastus sealt API otspunktist (mida brauser näeb)
  }, []);

  return (
    <select>
      {pms
        .filter(pm => pm.A0_NAME === "EE")
        .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
    </select>
  )
}

export default ParcelMachines