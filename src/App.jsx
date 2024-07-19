import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { useState } from "react"
import { SlBasket } from "react-icons/sl"
import "./App.css"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Cart from "./pages/cart/Cart"
import NavTop from "./components/navtop/NavTop"
import Product from "./pages/product/Product"
import Help from "./pages/help/Help"
import Brands from "./pages/brands/Brands"
import Seles from "./pages/seles/Seles"
import News from "./pages/news/News"

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavTop />
      <Router>
        <NavLink className="absolute ml-[1380px] mt-[35px]  text-white text-xl " to="/cart">
          {cart.length > 0 && (
            <span className=' absolute font-bold text-sm ml-4 w-6 h-6 mt-[-15px]'>{cart.length}</span>
          )}
          <div><SlBasket /></div>
        </NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path="/cart" element={<Cart products={cart} />} />
          <Route path="/help" element={<Help />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/seles" element={<Seles />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </>
  )
}

export default App