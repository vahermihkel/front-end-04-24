import React, { useEffect, useRef, useState } from 'react'

function EditCategories() {
  const url = "https://react-mihkel-webshop-04-24-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  function save() {
    categories.push({"name": categoryRef.current.value});
    // andmebaasi lisamine
    fetch(url, {"method": "PUT", "body": JSON.stringify(categories)});
    setCategories(categories.slice());
  }

  function kustuta(index) {
    categories.splice(index, 1);
    fetch(url, {"method": "PUT", "body": JSON.stringify(categories)});
    setCategories(categories.slice());
  }

  return (
    <div>
      <label>Category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <button onClick={save}>Insert</button><br />
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}
    </div>
  )
}

// saadan midagi kaasa:
// onClick={() => kustuta(i)}

// ei saada midagi kaasa:
// onClick={() => kustuta()}
// onClick={kustuta}

// käivitab funktsiooni koheselt (kohe lehele tulles pannakse käima):
// onClick={kustuta()}

export default EditCategories