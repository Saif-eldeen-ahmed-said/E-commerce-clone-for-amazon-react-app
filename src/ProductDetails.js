import React,{useContext} from 'react'
import IndetailProduct from './IndetailProduct'
import './productdetails.css'
import {Ccontext} from './Cartcontext'


function ProductDetails() {
  const [{itemView}]=useContext(Ccontext)

  let productArray= itemView.map((item)=>
 <IndetailProduct
  title={item.title}
  price={item.price}
  image={item.image}
  rating={item.rating}
  description={item.description}
  />)


  return (
    <div className='product-details'>{productArray}</div>
  )
}

export default ProductDetails