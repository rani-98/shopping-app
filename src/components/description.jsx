import { useParams } from "react-router-dom";
import { useState } from "react";
import Counter from "./components/counter.jsx";

function productInfo(props){
    
    const { product } = props;
    const [product,setProduct]=useState();
    const { product } = useParams();

    return(
        <>
        <h1>t-shirt</h1>
        <div>
            <img src={props.product.image} alt="shirt image"></img>
            <h1>{props.product.name}</h1>
            <h3>{props.product.price}</h3>
            <span className="  ">S</span>
            <span>M</span>
            <span>L</span>
            <span>Xl</span>
            <span>XXl</span>
            <h2>product description</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus eum facere, illum tempore officia enim ipsam rem 
                repudiandae nihil. Dolor debitis excepturi eligendi similique 
                cumque suscipit iure nesciunt, ea exercitationem? </p>

            <button className="w-7 h-6 bg-yellow-400">Add To Cart</button>
            <button className="w-7 h-6 bg-yellow-400">Buy Now</button>
            <Counter/>
        </div>
        </>

        
    )
}
export default productInfo