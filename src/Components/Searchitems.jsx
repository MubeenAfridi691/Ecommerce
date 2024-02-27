import React, { useEffect, useState } from 'react'
import items from './Data';
import { useParams } from 'react-router-dom';
import Products from './Products';

export default function Searchitems({cart,setcart}) {
  const {term}=useParams()
  const [filt, setfilt] = useState([])
useEffect(() => {

 const filterdata=() =>{

const data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
setfilt(data)
 }
 filterdata()
  
}, [term])

  return (
    <div>
      <Products items={filt}  cart={cart} setcart={setcart} />
    </div>
  )
}
