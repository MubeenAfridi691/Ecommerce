import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import items from './Data'
import "../index.css"
import Products from './Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Productsdetails({cart,setcart}) {
    const { id } = useParams()

    const [filteredProduct, setFilteredProduct] = useState({})
    const [relatedproduct, setRelatedproduct]=useState([])

    useEffect(() => {
        const filterProduct = items.find(product => product.id == id)
        setFilteredProduct(filterProduct)

        const related=items.filter((p)=>p.category === filteredProduct.category )
        setRelatedproduct(related)
        

    }, [id,filteredProduct.category])

    const addtocart=(id,price,title,description,imgSrc)=>{
      const obj={
        id,price,title,description,imgSrc
  
      }
      setcart([...cart,obj])
      toast.success('producted added', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce, // Uncomment if Bounce is properly imported or defined
      });
      
    }

    // If filteredProduct is null, return loading or some placeholder

    // Render the filtered product details
    return (
<>
<ToastContainer />

        <div className='shoppingcard' >
         <div className=" mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={filteredProduct.imgSrc}  className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p style={{fontSize:'30px'}}>{filteredProduct.title}</p>
            <p className="card-text">{filteredProduct.description}</p>
            <hr />
            <button className='btn btn-warning m-3' >PR:{filteredProduct.price}</button>
            <button
                    onClick={()=>{
                      addtocart(Products.id,Products.price,Products.title,Products.description,Products.imgSrc)
                    }}
                    className="btn btn-warning">Add to cart</button>
            
          </div>
        </div>
      </div>
    </div>
        </div>
        <h1 style={{marginLeft:'530px'}}>Related Products</h1>

    <Products items={relatedproduct} cart={cart} setcart={setcart} />
        </>
    )
}
