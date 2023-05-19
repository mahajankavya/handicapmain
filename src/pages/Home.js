import React from 'react'
import '../styles/Home.css'
import hi1 from '../assets/images/home1.jpeg'
import hi2 from '../assets/images/home2.jpeg'
import hi3 from '../assets/images/home3.jpeg'
import hi4 from '../assets/images/homeicon.png'

function Home() {

  return (
    <div>
      {/* <div>
          <p>hiii.....</p>
          <p>helllo...</p>
          <p>heyy.....</p>
          <p>woww.....</p>
        </div> */}
      <div className='homesection '>
        
          <div className='rowimg d-flex'>
           <div className='img1'> <img  src={hi3} /></div> 
           <div className='img2'> <img  src={hi1} /></div> 
           <div className='img3'> <img  src={hi2} /></div> 
           <div className='imgm'> <img  src={hi4} /></div> 
           <div className='img3'> <img  src={hi3} /></div> 
           <div className='img2'> <img  src={hi2} /></div> 
           <div className='img1'> <img  src={hi1} /></div> 
          </div>
        
      </div>
    </div>
  )
}

export default Home