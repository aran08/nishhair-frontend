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
import Shipping from "./pages/cart/Shipping";
import Step2 from "./pages/payment/Step2";
import Paymenttop from "./components/content/Paymenttop";
import Conditions from "./components/content/Conditions";
import Rozarpay from "./pages/payment/Rozarpay";
import Upi from "./components/content/Upi";
import Card from "./components/content/Card";
import Success from "./status/Success";
import Failure from "./status/Failure";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Checkbox from "./pages/order/Ordertab";


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
        <Route exact  path="/product/details/:id" element={<Details/>}/>
        <Route exact  path="/cart" element={<Cart/>}/>
        <Route exact  path="/register" element={<Register/>}/>
        <Route exact  path="/profile" element={<Profile/>}/>
        <Route exact  path="/checkbox" element={<Checkbox/>}/>
        <Route exact  path="/shipping" element={<Shipping/>}/>
        <Route exact  path="/payment" element={<Step2/>}/>
        <Route exact  path="/top" element={<Paymenttop/>}/>
        <Route exact  path="/condition" element={<Conditions/>}/>
        <Route exact  path="/rozorpay" element={<Rozarpay/>}/>
        <Route exact  path="/upi" element={<Upi/>}/>
        <Route exact  path="/card" element={<Card/>}/>
        <Route exact  path="/success" element={<Success/>}/>
        <Route exact  path="/failure" element={<Failure/>}/>
        <Route exact  path="/order" element={<Order/>}/>
        <Route exact  path="*" element={<PageNotfound/>}/>
     </Routes>
    </BrowserRouter>
  );
}