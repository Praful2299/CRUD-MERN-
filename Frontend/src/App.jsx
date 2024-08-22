import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Insert from "./Insert";
import Display from "./Display";
import Search from "./Search";
import Update from "./Update";
import EditData from "./EditData";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>} />
      <Route path="insert" element={<Insert/>} />
      <Route path="display" element={<Display/>} />
      <Route path="search" element={<Search/>} />
      <Route path="update" element={<Update/>} />
      <Route path="editdata/:id" element={<EditData/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;

