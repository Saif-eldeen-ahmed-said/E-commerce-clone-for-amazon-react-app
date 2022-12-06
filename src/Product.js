import React, {  useContext,useState } from 'react'
import {Ccontext} from './Cartcontext'
import './Product.css'
import {Link} from 'react-router-dom'




function Product({title , image , price ,rating, description})
  
  {

      const [,dispatch]=useContext(Ccontext)


      const [count,setCount]= useState(1)




const increment=()=>{
  if(count < 10){
setCount(count + 1) ;

}
}

const decrement=()=>{
  if(count > 1){
setCount(count - 1);

}
}



const addtobasket =()=>{

  dispatch({
    type:'add-to-basket',
    item:{
      title: title,
      price: price,
      image: image,
      rating: rating,
      count:count
    }})
}

const productView =()=>{
  dispatch({
    type:'product-view',
    item:{
      title: title,
    price: price,
    image: image,
    rating: rating,
    description: description,
  }
  })
}

  
  return (
    <div className='product' >
    <Link to='product-details' className='the-link' onClick={productView}>
      <div className='product-info' >
        <p className='p-title'>{title}</p>
        <p className='product-price' >
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='product-rating' >
          {Array(rating)
          .fill()
          .map((_, i)=>(
            // eslint-disable-next-line
          <span>⭐️</span>
          ))}
      </div>
      </div>
      <img  className='prod-img' alt='' src={image} />
      </Link>
      <div className='quantity-div'>
      <button className='count' onClick={decrement}>-</button>
      <span className='counter'>{count}</span>
      <button className='count'  onClick={increment}>+</button>
      </div>
        <button  onClick={addtobasket} >add to basket</button>
       
        </div>
  );
 
}



export default Product