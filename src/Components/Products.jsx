import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products({ items ,cart,setcart  }) {

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

  return (
    <>
<ToastContainer />

      <div className="container my-5">
        <div className="row">
          {items.map((products, i) => {
            return (
              <div key={i} className="col-lg-4 col-sm-12 col-md-6  mb-4">
                <div className="card text-center" style={{ width: "18rem" }}>
                  <Link to={`products/${products.id}`}>
                    <img
                      src={products.imgSrc}
                      className="card-img-top"
                      alt="loading..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">
                      {products.description.length < 50
                        ? products.description.substring(0, 10)
                        : products.description}
                    </p>
                    <button className="btn btn-primary mx-3">
                      {" "}
                      Rs.{products.price}
                    </button>
                    <button
                    onClick={()=>{
                      addtocart(products.id,products.price,products.title,products.description,products.imgSrc)
                    }}
                    className="btn btn-warning">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
