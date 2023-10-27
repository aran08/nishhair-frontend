import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop/Shop";
import PageNotfound from "./status/PageNot";
import Login from "./pages/auth/signin";
import Help from "./pages/help/Help";
import About from "./pages/about/About";
import Trial from "./pages/trial/Trial";
import Reviews from "./pages/riview/Reviews";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route exact  path="/shop" element={<Shop/>}/>
        <Route exact  path="/login" element={<Login/>}/>
        <Route exact  path="/helpme" element={<Help/>}/>
        <Route exact  path="/aboutus" element={<About/>}/>
        <Route exact  path="/bookatrial" element={<Trial/>}/>
        <Route exact  path="/reviews" element={<Reviews/>}/>
        <Route exact  path="*" element={<PageNotfound/>}/>
     </Routes>
    </BrowserRouter>
  );
}