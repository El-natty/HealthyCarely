import React from 'react'
import './footer.css'
import frame26 from '../assets/Frame 26.png'

const Footer = () => {
  return (
    <div className='footer' >
      <div className='footer-text'>
        <h1>Healthy<span>Carely</span></h1>
        <p>This free App provides a solution to your health needs by offering
            you a one-stop access to complete information about various
            medical checkups. This App carries simple tips and advice to
            help you maintain a healthy lifestyle.</p>

      </div>
      <div className='footer-headings'>
        <div className='footer-overview'>
          <h1>Overview</h1>
          <ul>
            <li>Checking health</li>
            <li>Find Doctor</li>
            <li>Make a Schedule</li>
          </ul>
        </div>
        <div className='footer-company'>
          <h1>Company</h1>
          <ul>
            <li id='home'><a href='home'>Home</a></li>
            <li id='about'><a href='about'>About</a></li>
            <li id='service'><a href='service'>Services</a></li>
          </ul>
          </div>
          <div className='footer-explore'>
            <h1>Explore</h1>
            <ul>
            <li id='tc'>Terms & Conds</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
          </div>

          <div className='footer-socials'>
            <h1>Social Media</h1>
            <ul>
              <li>
                <img src={frame26} alt="Social Media Icon" />
              </li>
            </ul>
          </div>
        
      </div>


    </div>
  )
}

export default Footer
