import React, { useState } from "react";
import "../index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import items from "./Data";
import { PiShoppingCartSimpleLight } from "react-icons/pi";


export default function Navbar({ setdata,cart }) {

  const Location=useLocation()
  // console.log(Location)

  const Navigate =useNavigate()
  
  const filterdata = (category) => {
    const element = items.filter((p) => p.category === category);
    setdata(element);
  };
  const filterprice = (price) => {
    const filtprice = items.filter((p) => p.price === price);
    setdata(filtprice);
  };
  
  const [search, setsearch] = useState("");
  const searchterms = (e) => {
    Navigate(`/search/${search}`);
  }
  const searchthings=(e)=>{
    setsearch(e.target.value)
    

  }
  
  return (
    <>
      <div className="nav-bar sticky-top">
        <Link to="/" className="brand">
          E-Commerce
        </Link>
        <form onSubmit={searchterms} className="nav-search">
          <input
            type="text"
            onChange={searchthings}
            placeholder="Search Products"
          />
        </form>
        <Link to="/cart" className="nav-cart">
        <button type="button" className="btn btn-primary position-relative">
        <PiShoppingCartSimpleLight style={{fontSize:"2.5rem"}} />


  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden"></span>
  </span>
</button>
        </Link>
      </div>

      {
        location.pathname== '/'&&
        <div className="navbar-wrapper">
        <div className="item">Filter By {"-->"}</div>
        <div className="item">Filter</div>
        <div
          onClick={() => {
            setdata(items);
          }}
          className="item"
        >
          No Filter
        </div>
        <div
          onClick={() => {
            filterdata("mobiles");
          }}
          className="item"
        >
          Mobiles
        </div>
        <div
          onClick={() => {
            filterdata("laptops");
          }}
          className="item cursor-auto"
        >
          Laptops
        </div>
        <div
          onClick={() => {
            filterdata("tablets");
          }}
          className="item"
        >
          Tablets
        </div>
        <div onClick={() => filterprice("49999")} className="item">
          RS:49999
        </div>
        <div onClick={() => filterprice("29999")} className="item">
          RS:29999
        </div>
        <div onClick={() => filterprice("69999")} className="item">
          RS:69999
        </div>
        <div onClick={() => filterprice("89999")} className="item">
          RS:89999
        </div>
      </div>
      }
    </>
  );
}
