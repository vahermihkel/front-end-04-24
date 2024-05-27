import React from 'react'
import {useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import tootedJSON from "../data/tooted.json"
 
function MuudaToode() {
  const { index }   = useParams();
    const leitud = tootedJSON[index];
    const tootedRef = useRef();
    const navigate = useNavigate();
 
    function muuda() {
      tootedJSON[index] = tootedRef.current.value;
      navigate("/halda-tooted");
    }
 
    if (leitud === undefined) {
      return <div>Toodet ei leitud</div>
    }
 
  return (
    <div>
      <label>Toode</label><br />
      <input type="text"  ref={tootedRef} defaultValue={leitud}/> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}
 
export default MuudaToode