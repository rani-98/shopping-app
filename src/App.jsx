import React from "react";
import './App.css'
import NavBar from "./components/navbar"; 
import Card  from "./components/card"
import { useState } from "react";


function App() {
  const [productType, setProductType] = useState()
  const products=["p/src/app.py"]
  
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-4 p-3">
      <Card product={{id:12}} type={productType} changeProduct={setProductType}/>
      

      <Card shopping={{id:"1", name: "blue shirt", price: "23.23"}} />
      </div>
      
    </>
  )
}

export default App 
