import React,{useState,useEffect} from 'react'
import './Home.css'
import Product from './Product'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import db from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';









function Home() {
  
  const [products , setproducts] =useState([])

  useEffect(()=>{
 onSnapshot(collection(db,"products"),(snapshot)=>{
  setproducts(snapshot.docs.map(doc=>doc.data()))
})
  }
 ,[])

const [noClass , setNoClass]=useState(true)



  return (
    <div className='home'>
<div className='slide'>
      <div className='slide-child' >
        <img  className={noClass ? null: "active"}  alt='' src='/images/jump.jpg' />
        <img   alt='' src='/images/deal.jpg'/>
      </div>
      <button className='next' onClick={()=>setNoClass(!noClass)} ><ArrowForwardIosIcon/></button>
      <button className='prev' onClick={()=>setNoClass(!noClass)}><ArrowBackIosNewIcon/></button>
      </div>
      <div   className='home-row'>
      {products.map(({description,price,image,rating,title} )=>(
          <Product 
          description={description}
          price={price}
          image={image}
          rating={rating}
          title={title}
          />
      )

      )}
</div>

      </div>
  )
}

export default Home