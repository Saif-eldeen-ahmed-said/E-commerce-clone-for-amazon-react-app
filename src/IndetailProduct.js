import React from 'react'
import './indetailproduct.css'


function IndetailProduct({title,price,image,rating, description}) {
 
  return (
    <div className='indetail-product'>
      <div className='the-product-wrapper'>
    <div className='rating-price'>
    <div className='the-product-rating' >
          {Array(rating)
          .fill()
          .map((_, i)=>(
            // eslint-disable-next-line
          <span>⭐️</span>
          ))}
      </div>
  <p>
    {price} <small>$</small>
    </p>
    </div>
    <div className='photo-wrapper'>
      <img src={image} alt=''/>
    </div>
    </div>
    <div  className='title-desc'>
         <h1>{title}</h1>
          <p>{description}</p>
    </div>
    </div>
  )
}

export default IndetailProduct