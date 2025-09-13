import React from 'react'
import Rectangle from "../assets/Rectangle 14.png"
import Group from "../assets/Group 5.png"
import './review.css'


const Review = () => {
  return (
    <div className='review'>

        <div className='review-heading'>
            <h1>Our patients feedback about us</h1>
            <p>their impression after using the application</p>
        </div> 

        <div className='review-content'>
             <img src={Group} width={100} className='reviewer-img' /> 
            <p id='review-p'>'HealthyCarely is a website and  mobile app for you
                to feel better  or get medical help .
                We offer you a 24/7 doctor service
                with no appointment needed'</p>

        </div>
        <div className='reviewer'>
          <h1>Naufal Hidayat</h1>
          <p>student at Telkom university</p>
        </div>
        
    </div>
    
  )
}

export default Review