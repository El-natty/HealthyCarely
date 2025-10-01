import React from 'react'
import Rectangle from "../assets/Rectangle 14.png"
import Group from "../assets/Group 5.png"
import './review.css'



const Review = () => {
  return (
    <div className='review' id='review'>

        <div className='rating'>
          <p className='fpp'>Our Rating</p>
          <h2>
              We’re employee benefit at <br></br>
              7500+ hospital 
          </h2>
        </div>

          <div className='All-box-rating'>
            
              <div className='box-rating'>
                  <h2>
                    900+
                  </h2>
                  <p className='fp1'>Verified Specialist</p>
                  <p className='fp2'>Highly Verified</p>
                
              </div>

            <div className='box-rating2'>
                <h2>
                  45000+
                </h2>

                <p className='fp1'>Happy Customers</p> 
                <p className='fp2'>High performance</p>
            </div>

            <div className='box-rating3'>
                <h2>
                  99.7%
                </h2>

                <p className='fp1'>positive Feedback</p> 
                <p className='fp2'>Customers Approve</p>
            </div>
          </div>

         
          
        

        {/* review heading */}

        <div className='review-heading'>
            <h1>Our patients feedback about us</h1>
            <p>their impression after using the application</p>
        </div> 

        <div className='review-content'>
             <img src={Group} width={100} className='reviewer-img' /> 
            <p id='review-p'>"HealthyCarely is a website and  mobile app<br></br>
                for you to feel better  or get medical help .<br></br>
                We offer you a 24/7 doctor service
                with no<br></br> appointment needed"</p>

        </div>
        <div className='reviewer'>
          <h1>Naufal Hidayat</h1>
          <p>student at Telkom university</p>
          <img src="<i class='bxr  bx-arrow-right'  ></i> " id='img' />
          <img src="<i class='bxr  bx-arrow-left-stroke'  ></i> " id='img'/>
        </div>
        
    </div>
    
  )
}

export default Review