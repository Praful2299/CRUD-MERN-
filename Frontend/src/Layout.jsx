import { Outlet } from "react-router-dom";
import Navbars from "./Navbars";
import Footer from "./Footer";

const Layout=()=>{
    return(
        <>
        <div id="root">
        <Navbars/>
        <main>  
        <Outlet/>
        </main>
        <Footer/>
        </div> 
        </>
    )
}
export default Layout;
