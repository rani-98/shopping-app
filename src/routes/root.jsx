import {Outlet} from "react-router-dom";
import NavBar from "../components/navbar";
import Cart from "../components/cart";


export default function Root() {
       return (
        <>
        <div>
            <NavBar/>
            <Outlet />
            <Cart/>
        </div>
        </>
    )
}