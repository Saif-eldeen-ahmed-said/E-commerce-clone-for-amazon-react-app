import React ,{useContext}from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import {Ccontext} from './Cartcontext'
import { signOut } from 'firebase/auth';
import  {auth}   from './firebase'
import { totalCount } from './reducer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {
  const [{basket,user}]= useContext(Ccontext)
  
  const userSignOut =()=>{
    if(user){
      signOut(auth);
    } 
  }

  return (
    <div className='header'>
       <Link to={'/'} > <img 
     className='header-logo'
     src='/images/amazon.png' 
    alt='amazon logo' /></Link> 
 

   <div className='header-search'>
       <input className='header-search-input' type="text" /> 
      <SearchIcon  className='header-search-icon'/>
   </div>
   <div className='header-navbar'>

   <Link to={'login'} >
<div onClick={userSignOut} className='header-nav-option'>
<span className='header-nav-opt-line1'>hello {
  user? user.email:'guest'
}
</span>
<span 
className='header-nav-opt-line2'>{
  user? 'sign out':'sign in'
}
</span>
</div>
</Link>

<div className='header-nav-option'>
<span
 className='header-nav-opt-line1'>returns
</span>
<span
 className='header-nav-opt-line2'>orders
</span>
</div>
<div className='header-nav-option'>
<span className='header-nav-opt-line1'>go
</span>
<span
 className='header-nav-opt-line2'>Prime
</span>
</div>
<Link to={"checkout"}>
  <div className='header-basket-option' >
  <span className='header-basket-logo'>
  <ShoppingCartIcon className='cart-icon'/>
  </span>
  <span className='header-nav-opt-line2 header-basket-counter'>
{totalCount(basket)}
  </span>
</div></Link>

</div>
</div>


  )
}

export default Header