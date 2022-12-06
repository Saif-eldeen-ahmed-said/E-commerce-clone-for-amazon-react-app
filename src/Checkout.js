import React,{useContext} from 'react'
import './checkout.css'
import Checkoutprice from './Checkoutprice'
import IncheckProduct from './IncheckProduct'
import {Ccontext} from './Cartcontext'



function Checkout() {
 
  const [{basket,user}]=useContext(Ccontext)

 let total= basket.map((item)=>
 <IncheckProduct 
  title={item.title}
  price={item.price}
  image= {item.image}
  rating= {item.rating}
  count={item.count}
  />)

 

  return (
    <div className='checkout'> 
        <div className='left-side'>
            <div className='image-wrapper'>
            <img className='the-image' src='/images/Amazon hor.jpg' alt='hello peter' />
            </div>
            <h1 className='basket-title'>hello - {user ? user?.email: 'guest' }<br/> your basket {basket <= 0? 'is empty':'items is'}</h1>
            {total}
         { basket <= 0 ? <div className='image-holder'>
              <img src='/images/pngwing.com (1).png' alt='' />
            </div>: '' }
        </div>
        <div className='right-side'>
            <Checkoutprice />
        </div>
        
    </div>
  )
}

export default Checkout