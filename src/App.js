import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotfound from "./status/PageNot";
import Login from "./pages/auth/signin";
import Help from "./pages/help/Help";
import About from "./pages/about/About";
import Trial from "./pages/trial/Trial";
import Reviews from "./pages/riview/Reviews";
import Product from "./pages/product";
import Details from "./pages/product/Details";
import Register from "./pages/auth/signup/Register";
import Profile from "./pages/profile/Profile";
import Info from "./pages/cart/Info";
import Shipping from "./pages/cart/Shipping";


export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route exact  path="/login" element={<Login/>}/>
        <Route exact  path="/helpme" element={<Help/>}/>
        <Route exact  path="/aboutus" element={<About/>}/>
        <Route exact  path="/bookatrial" element={<Trial/>}/>
        <Route exact  path="/reviews" element={<Reviews/>}/>
        <Route exact  path="/product" element={<Product/>}/>
        <Route exact  path="/product/details" element={<Details/>}/>
        <Route exact  path="/register" element={<Register/>}/>
        <Route exact  path="/profile" element={<Profile/>}/>
        <Route exact  path="/information" element={<Info/>}/>
        <Route exact  path="/shipping" element={<Shipping/>}/>
        <Route exact  path="*" element={<PageNotfound/>}/>
     </Routes>
    </BrowserRouter>
  );
}