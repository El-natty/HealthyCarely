import React from 'react'
import './home.css'
import img1 from '../assets/female doctor_fococlipping_removed 1 (1).png'
import img2 from '../assets/Ellipse 1.png'
import img3 from '../assets/Group 1.png'

const Home = () => {
  return (
    <div className="landing-container">
    {/* Top Section */}
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Medical Care Now <br /> Simplified For{" "}
          <span className="highlight">Everyone</span>
        </h1>
        <p>
          Health carely is a new way to get health insurance quotes. We offer
          tools similar to those provided by insurance companies for free and
          prices are based on donations and not restrictive health plan
          networks.
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>

      <div className="hero-image">
        <img
          src={img1}
          alt="Doctor"
          className="doctor-img"
        />
        <div className="doctor-card">
          <img
            src={img3}
            alt="Dr Shimanta"
            className="doctor-avatar"
          />
          <div>
            <h4>Dr. Shimanta</h4>
            <p>Skin Specialist</p>
            <button className="schedule-btn">Make Schedule</button>
          </div>
        </div>
      </div>
    </section>

    {/* Steps Section */}
    <section className="steps-section">
      <h5 className="subtitle">Fast Solutions</h5>
      <h2>
        step by step to get <br /> your solutions
      </h2>

      <div className="steps-grid">
        <div className="step-card">
          <span className="step-icon">💬</span>
          <h3>Check health complaints</h3>
          <p>
            Check the disease so you can easily choose the right specialist.
          </p>
        </div>
        <div className="step-card">
          <span className="step-icon">👤</span>
          <h3>Choose doctor Specialist</h3>
          <p>
            Choose a specialist according to your disease complaints.
          </p>
        </div>
        <div className="step-card">
          <span className="step-icon">📅</span>
          <h3>Make a Schedule</h3>
          <p>
            Make a schedule with the doctor concerned so you can start the
            examination.
          </p>
        </div>
        <div className="step-card">
          <span className="step-icon">⭐</span>
          <h3>Get your Solutions</h3>
          <p>
            After conducting an examination with a specialist we can help find
            the right healing method.
          </p>
        </div>
      </div>
    </section>
  </div>
);
};



export default Home