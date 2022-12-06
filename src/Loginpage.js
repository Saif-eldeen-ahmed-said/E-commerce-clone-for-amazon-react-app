import React,{useState} from 'react'
import './loginpage.css'
import {Link, useNavigate} from 'react-router-dom'
import  {auth}   from './firebase'
import {createUserWithEmailAndPassword
,signInWithEmailAndPassword,
} from 'firebase/auth';




function Loginpage () {
  const navigate = useNavigate();
  const [RegEmail,setRegEmail] =useState('');
  const [RegPassword,setRegPassword] =useState('');





  let createAccount =async (e)=>{
    e.preventDefault();

    try{
 await createUserWithEmailAndPassword(auth,RegEmail,RegPassword)
.then((auth)=>{

  if (auth) {
    navigate('/')
  }
})
    }catch  (error){
      console.log(error.message)
      }
    }




let loginAuth = async (e)=>{
  e.preventDefault();
try{
 await  signInWithEmailAndPassword(auth,RegEmail,RegPassword)
.then((auth)=>{
  navigate("/")
})
 } catch  (error){
console.log(error.message)
}
}



  return (
    <div className='login'>
      <Link to={'/'} >
      <div className='logo-wrapper'>
        <img  className='amazon-logo' src='http://logo-logos.com/2016/12/Amazon_logo.png' alt='' />
        </div>
        </Link>
        <div className='login-form'>
              <h1>Sign-in</h1>
              <form action=''>

              <label htmlFor='one'>
                E-mail
                </label>
                <input id='one'  value={RegEmail} className='username' type='text' placeholder='enter your email' 
                  onChange={(e)=>setRegEmail(e.target.value)}/>

                <label htmlFor='two'>
                  Password
                  </label>
                <input id='two' className='username' type='password' placeholder='enter your password'
                 value={RegPassword} onChange={(e)=>setRegPassword(e.target.value)}/>
                <button className='signin-btn'  value='submit'  onClick={loginAuth}>Sign-in</button> 
                </form>

                 <p className='terms'>
                   by signing-in you agree to fake-amazon made by saif ahmed conditions & terms of use
                    please read this note carefully to learn about your privacy
                 </p>
                 <button className='signup-btn'  onClick={createAccount}>Sign-Up & create account </button> 
        </div>
    </div>
  )
  }

export default Loginpage