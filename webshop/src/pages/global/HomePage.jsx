import React, { useEffect, useRef } from 'react'
//import productsJSON from "../../data/products.json"
//import cartJSON from "../../data/cart.json"
import { useState } from 'react';
import { Button } from '@mui/material';
import styles from "../../css/HomePage.module.css";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import SortButtons from '../../components/SortButtons';
import FilterProducts from '../../components/OffCanvas';
// from "react" --> võtab node_module-st React kaustast
// from "@mui/material" --> võtab node_module-st @mui kaustast, mille sees on material kaust
// from "../" --> läheb kausta võrra ülespoole

// salvestamise võimalused:
// 1. localStorage
// 2. andmebaas
// 3. faili -> kirjutab ka

let mybutton = document.getElementById("myBtn");


function HomePage() {
  const MyHomepageRef = useRef(null);
  const MyAboutRef = useRef(null);
  const MyPortfolioRef = useRef(null);
  // const MyContactRef = useRef(null);

  const scrollToSectionMyHomepage = () =>
    MyHomepageRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToSectionMyAbout = () =>
    MyAboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToSectionMyPortfol = () =>
    MyPortfolioRef.current.scrollIntoView({ behavior: "smooth" });
  // const scrollToSectionMyContact = () =>
  //   MyContactRef.current.scrollIntoView({ behavior: "smooth" });


  // Get the button:

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const [products, setProducts] = useState([]); // muutuv seisund -> HTMLs
  const [dbProducts, setDbProducts] = useState([]); 
  // andmebaasi seis -> ei muuda, et saaks resetida
  // setDbProducts rohkem ei tee kui andmebaasist võttes
  const url = "https://react-mihkel-webshop-04-24-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const urlProducts = "https://react-mihkel-webshop-04-24-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  useEffect(() => {
    fetch(urlProducts)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
      });
  }, []);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const toCart = (product) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const found = cartLS.find(cp => cp.toode.id === product.id);
    if (found === undefined) {
      cartLS.push({kogus: 1, toode: product});
    } else {
      found.kogus = found.kogus + 1;
    }

    // cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  // localStorage-sse ARRAY/LIST/MASSIIV panekul on vaja viite sammu:
  // 1. võtta localStorage-st (localStorage.getItem("VÕTI"))
  // 2. võtta jutumärgid maha (JSON.parse())
  // 3. lisada üks juurde (.push())
  // 4. panna jutumärgid tagasi (JSON.stringify())
  // 5. panna localStorage-sse tagasi (localStorage.setItem("VÕTI", "UUS"))

  // const filterMensClothing = () => {
  //   const result = productsJSON.filter(product => product.category === "men's clothing");
  //   setProducts(result);
  // }

  // const filterJewelery = () => {
  //   const result = productsJSON.filter(product => product.category === "jewelery");
  //   setProducts(result);
  // }

  // const filterElectronics = () => {
  //   const result = productsJSON.filter(product => product.category === "electronics");
  //   setProducts(result);
  // }

  // const filterWomensClothing = () => {
  //   const result = productsJSON.filter(product => product.category === "women's clothing");
  //   setProducts(result);
  // }

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div ref={MyHomepageRef}>

      <FilterProducts 
        products={products}
        setProducts={setProducts}
      />

      <Nav>
        <Nav id="myBtn" onClick={scrollToSectionMyHomepage}>
          Kõige üles
        </Nav>
        <Nav id="navlink" onClick={scrollToSectionMyAbout}>
          Kokku tooteid
        </Nav>
        <Nav id="navlink" onClick={scrollToSectionMyPortfol}>
          Filtreeri nupud
        </Nav>
        {/* <Nav id="navlink" onClick={scrollToSectionMyContact}>
          Sorteeri nupud
        </Nav> */}
      </Nav>

      <br /><br />
      <div ref={MyAboutRef}><b>Tooted: {products.length} tk</b></div>
     
      <br /><br />
      {/* <Button onClick={filterMensClothing}>men's clothing</Button>
      <Button onClick={() => filterByCategory("jewelery")}>jewelery</Button>
      <Button onClick={() => filterByCategory("electronics")}>electronics</Button>
      <Button onClick={filterWomensClothing}>women's clothing</Button> */}
      

      <div className={styles.products}>
        {products.map((product, index) => 
          <div key={product.id} className={styles.product}>
            <img className={styles.picture} src={product.image} alt=""></img>
            <div className={styles.title}>{product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title }</div>
            <div>{product.price}</div>
            <button onClick={() => toCart(product)}>Add to cart</button>
            <Link to={"/product/" + product.id}>
              <button>Details</button>
            </Link>
          </div>
        )} 
      </div>

      <div ref={MyPortfolioRef}>
        {categories.map(category => <Button onClick={() => filterByCategory(category.name)}>{category.name}</Button>)}
      </div>
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <SortButtons 
        setProducts={setProducts}
        products={products}
        dbProducts={dbProducts}
        />
    </div>
  )
}

export default HomePage