import React from "react";
import './App.css'
import NavBar from "./components/navbar"; 
import Card  from "./components/card"


function App() {
  
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-4 p-3">
      <Card />
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPb_fiQKuhgxBApE83vlQXUI8JNLFFpYgR1WRIovH6AA&s" name="ADRO Mens printed t shirt "/>
      <Card />
      <Card />
      <Card />

      </div>
      
    </>
  )
}

export default App 
