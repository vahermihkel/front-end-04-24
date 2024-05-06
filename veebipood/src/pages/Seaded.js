import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
  const [keel, muudaKeel] = useState("est");
  const aadressRef = useRef();
  const [aadress, muudaAadress] = useState();
  const emailRef = useRef();
  const [email, muudaEmail] = useState();
  const telefonRef = useRef();
  const [telefon, muudaTelefon] = useState();

  // const sisestaAadress = () => {}
  function sisestaAadress() {
    if (aadressRef.current.value === "") {
      toast.error("Pead midagi sisestama!");
      return; // return lõpetab funktsioon, ehk siit enam edasi ei lähe
    }
    if (aadressRef.current.value.length < 4) {
      toast.error("Peab olema vähemalt 4 tähemärki!");
      return; 
    }
    toast.success("Edukalt sisestatud!");
    muudaAadress(aadressRef.current.value);
  }

  function sisestaEmail() {
    if (emailRef.current.value === "") {
      toast.error("Pead midagi sisestama!");
      return; // return lõpetab funktsioon, ehk siit enam edasi ei lähe
    }
    if (emailRef.current.value.includes("@") === false) {
      toast.error("E-mail peab sisaldama @ märki!");
      return; 
    }
    toast.success("Edukalt sisestatud!");
    muudaEmail(emailRef.current.value);
  }

  function sisestaTelefon() {
    if (telefonRef.current.value === "") {
      toast.error("Pead midagi sisestama!");
      return; // return lõpetab funktsioon, ehk siit enam edasi ei lähe
    }
    if (telefonRef.current.value.startsWith("+372") === false) {
      toast.error("Telefon peab algama suunakoodiga: +372!");
      return; 
    }
    if (isNaN(telefonRef.current.value) === true) {
      toast.error("Telefon peab koosnema numbritest!");
      return; 
    }
    toast.success("Edukalt sisestatud!");
    muudaTelefon(telefonRef.current.value);
  }

  return (
    <div>
      <button onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button onClick={() => muudaKeel("eng")}>To English</button>
      <button onClick={() => muudaKeel("rus")}>Pycckij</button>
      <div>Aktiivne keel: {keel}</div>
      {keel === "est" && <div>Leht on hetkel eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на русском языке</div>}
      <br /><br />

      <label>Aadress</label>
      <input type="text" ref={aadressRef} />
      <button onClick={sisestaAadress}>Sisesta</button>
      <br /><br />

      <label>Email</label>
      <input type="text" ref={emailRef} />
      <button onClick={sisestaEmail}>Sisesta</button>
      <br /><br />

      <label>Telefon</label>
      <input type="text" ref={telefonRef} />
      <button onClick={sisestaTelefon}>Sisesta</button>
      <br /><br />

      <div>Sisestatud aadress: {aadress}</div>
      <div>Sisestatud email: {email}</div>
      <div>Sisestatud telefon: {telefon}</div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />

    </div>
  )
}

export default Seaded