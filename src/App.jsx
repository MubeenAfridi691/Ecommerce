import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Searchitems from './Components/Searchitems'
import Productsdetails from './Components/Productsdetails'; // Change to lowercase "p"
import { useState,react } from 'react'
import items from './Components/Data'



export default function App() {
  const [data, setdata] = useState([...items])
  const [cart,setcart]=useState([])
  return (
    <>
    <BrowserRouter>
    <Navbar setdata={setdata}  cart={cart}   />
    <Routes>
      <Route path='/' element={<Products  cart={cart} setcart={setcart}  items={data}/> }/>
      <Route path="/products/:id" element={<Productsdetails cart={cart} setcart={setcart} />} />
      <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />}   />
      <Route path='/search/:term' element={<Searchitems cart={cart} setcart={setcart}  />}  />
    </Routes>
    </BrowserRouter>
  
  </>
  )
}