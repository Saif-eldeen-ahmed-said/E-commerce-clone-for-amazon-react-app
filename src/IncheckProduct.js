import React , { useState,useContext } from 'react'
import {Ccontext} from './Cartcontext'
import './incheckproduct.css'




function IncheckProduct({title,price,image,rating,count}) {

  const [,dispatch]=useContext(Ccontext)


  const [counter,setCounter]= useState(count)


  const increment=()=>{
    if(counter < 10){
  setCounter(counter + 1) ;
    }
   dispatch({
    type:'increase',
    item:{
      title:title,
    }
   })
  }
  
  
  const decrement=()=>{
    if(counter > 1){
      setCounter(counter - 1) ;
    }
    dispatch({
      type:'decrease',
      item:{
        title:title,
      }
     })
  }
  

  const Removefrombasket=()=>{
    dispatch({
      type:"remove",
      item:{
      title:title,
      }
    })
  }

 
          
  return (
    <div className='IncheckProduct' >
      <img  className='pimage' alt='' src={image}/>
        <div  className='pinfo'>
          <h1 className='ptitle'>{title}</h1>
          <p  className='pprice'>{price}</p>
          <p className='prating'>
          {Array(rating).fill().map((_,i)=>( 
            // eslint-disable-next-line
          <span>⭐️</span>))}
          </p>
          <button className='count' onClick={decrement}>-</button>
      <span className='counter'>{counter}</span>
      <button className='count'  onClick={increment}>+</button>
          <button className='remove-btn'  onClick={Removefrombasket}>remove from basket</button>
        </div>
        </div>
  )
}

export default IncheckProduct