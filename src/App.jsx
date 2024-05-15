import React from "react";
import './App.css'
import NavBar from "./components/navbar"; 
import Card  from "./components/card"
import { useState } from "react";


function App() {
  const [productType, setProductType] = useState()
  const products=[]
  
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-4 p-3">
      <Card type={productType} changeProduct={setProductType}/>
      
      </div>
      
    </>
  )
}

export default App 
