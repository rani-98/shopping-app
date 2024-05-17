import { useState } from "react";
import Card from "./card";
import { useSearchParams } from "react-router-dom";

const url = "https://widespread-mellisent-vj0.koyeb.app/recipes"


export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [product,setProduct]=useState();
    //const {token} = useContext(AuthContext)

    const changeProduct = (type) => {
        setSearchParams({ type: type })
    }
    const productType = searchParams.get("type")
    fetch(url, {
        headers : {
            Authorization: "Bearer " + token
        }
    }).then((response) => {
        return response.json() // here we are trying to access the json data from the response which is stored in the memory (RAM). 
        // To access memory from ram we need to use json() function, which will ask the operating system to give the data stored in the memory
        // Instead javascript waiting for the data in memory, it will return a promise which will be resolved when the data is available from the memory by the operating system.
    }).then((data) => {
        // data -> {recipes: [{}, {}, {}]}
        setProduct(data.products)
    })

    return (
        <>
            <Card type={productType} changeProduct={changeProduct} />
            <div className="grid grid-cols-4 gap-6 p-8">
                {
                    // [Card, Card]
                    product.map((product, index) => {
                        if (productType === product.type || productType === "all") {
                            return <Card key={index} product={product} />
                        }
                    })
                }
            </div>

    
        </>
)   
}
