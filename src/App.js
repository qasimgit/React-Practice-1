import React, { useState, useEffect } from "react";
import { Header, Content, Footer } from "./components";
import { Products } from "./components/product/product";
import "./app.css";
import DB from "./db.json";

const App = () => {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    setProducts(DB.Products)
  },[])
  console.log(products)

  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default App;
