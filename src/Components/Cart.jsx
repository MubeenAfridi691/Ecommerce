import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({cart,setcart}) {
  return (
    <>
    <div className='orgcart'>
{cart.length==0? 
    <Link className='btn btn-warning' to='/'>Continue Shopping...</Link>  
    :cart.map((product)=>{
      return(
        <div className="card mb-3" style={{'max-width': '540px'}}>
<div className="row g-0">
  <div className="col-md-4">
    <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <h5 className="card-title">{product.description}</h5>
      <button className="btn btn-warning">PR:{product.price}</button>
    </div>
  </div>
</div>
</div>
      )
    })
    }
    </div>
<hr />
{cart.length!==0 &&
<div style={{marginLeft:'600px'}}>
 <button className='btn btn-warning' onClick={()=>{
  setcart('')
 }} >clear Car</button>
<button className='btn btn-primary mx-3'>check out!</button>
</div>
}
    </>
  )
}
