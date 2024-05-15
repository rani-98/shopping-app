import React from "react";
import { useState } from "react";

function navbar(){
    const[currentPage,setCurrentPage]=useState("home")
    const pageStyle="cursor-pointer border-b-2 border-blue-500"
    const pointer="cursor-pointer"

    function handleClick(page){
        setCurrentPage(page)
    }

    const homeClick=()=>{
        handleClick("home")
    }
    const cartClick=()=>{
        handleClick("cart")
    }
    const wishlistClick=()=>{
        handleClick("wishlist")
    }
    const aboutClick=()=>{
        handleClick("about")
    }

    console.log("Current Page:",currentPage)

    

    return(
        <>
        <div className="flex justify-between">

            <img className="h-10 w-15"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-jAnSlJ1el5yK8ztdorlx7-FRvisOuwED-Rd_XXIiQ&s" alt="logo"></img>

            <ul className="flex gap-3">
                <li className={currentPage==="home"? pageStyle : pointer} onClick={homeClick}>home</li>
                <li className={currentPage==="cart"? pageStyle : pointer} onClick={cartClick}>cart</li>
                <li className={currentPage==="wishlist"? pageStyle : pointer} onClick={wishlistClick}>wishlist</li>
                <li className={currentPage==="about"? pageStyle : pointer} onClick={aboutClick}>about</li>
            </ul>
 
        </div>
        
        </>

    )
}

export default navbar;