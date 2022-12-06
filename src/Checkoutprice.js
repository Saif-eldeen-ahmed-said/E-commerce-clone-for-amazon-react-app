import React ,{useContext}from 'react'
import CurrencyFormat from 'react-currency-format'
import {Ccontext} from './Cartcontext'
import {theprice, totalCount} from './reducer'
import './checkoutprice.css'


function Checkoutprice() {
  const [{basket}]= useContext(Ccontext);
  return (
    <div  className='Checkoutprice'>
        <CurrencyFormat
        renderText={(value)=>(
            <div className='checkout-box'>
            <p className='basket-price'>
                total ({totalCount(basket)} items):<strong>{value}</strong>
            </p>

            <label  htmlFor='ein'>
            <input id='ein' type="checkbox" />
            the order contains a gift
            </label>
            </div>
  )}
    
        value={theprice(basket) }
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button  className='checkout-btn'>proceed to checkout</button>
    </div>
  )
}

export default Checkoutprice