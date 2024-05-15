import React from "react";

function Card(){
    return(
        <Link to={`/shopping/${props.product.id}`}>
        <div className="flex justify-between gap-3 w-50 h-50 shadow-lg shadow-red-500 rounded-lg">
            <div className="rounded-lg">
            <img src="https://images.glowroad.com/faceview/ge/dh/bj/bd/imgs/pd/1628497452927_WhatsApp_Image_2021-08-06_at_1.24.04_PM__3_-xlgn400x400.jpeg?productId=P-5543479" alt="shirt "></img>
            <h1>USPA Mens wear T-shirts</h1>
            <span>$23 </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>




            </div>
            



        </div>

        </Link>
    
    
    
    )
}
export default Card