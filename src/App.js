import React ,{useEffect,useContext} from 'react';
import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Loginpage from './Loginpage';
import Withoutheader from './Withoutheader';
import Withheader from './Withheader';
import { onAuthStateChanged } from 'firebase/auth';
import  {auth}   from './firebase'
import {Ccontext} from './Cartcontext'
import ProductDetails from './ProductDetails';








function App () {



    const [{},dispatch]=useContext(Ccontext)

    useEffect(()=>{
        onAuthStateChanged(auth,(authUser)=>{
            if(authUser) {
            dispatch({
                type:"log-user",
                user: authUser
            })
            }else {
                dispatch({
                    type:"log-user",
                    user: null
                })
            }
        
        })
    }
 ,[]);








    return (
        <Router>
        <div className='App'>
            <Routes>
                <Route element={<Withheader/>}>
           <Route  path='checkout' element={<Checkout/>} />
            <Route  path='/' element={<Home/>} />
            <Route  path='/product-details' element={<ProductDetails/>} />
            </Route>

            <Route element={<Withoutheader/>} >
            <Route path='login'  element={<Loginpage/>} />
            </Route>
        </Routes>
        </div>
        </Router>

        
    )
}

export default App


