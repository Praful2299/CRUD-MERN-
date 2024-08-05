import { Link , Outlet } from "react-router-dom";
import Navbars from "./Navbars";

const Layout=()=>{
    return(
        <>
        <Navbars/>
        <hr color="black"/>
        <Outlet/>
        <hr color="black"/>
        <h6 align="center">WWW.MYCOMPANY.COM</h6>   
        </>
    )
}
export default Layout;
