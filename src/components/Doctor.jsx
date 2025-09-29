import React from 'react';
import './doctors.css';
import img1 from '../assets/female-doctor_fococlipping_removed 1.png'; // doctor image
import img2 from '../assets/image 3.png'; // schedule illustration
import img3 from '../assets/Frame 19.png'; // doctor card popup
import img4 from '../assets/Ellipse 6.png'; // circle background

const Doctors = () => {
  return (
    <section className="doctors-section">

      {/* ====== FIRST SECTION ====== */}
      <div className="doctor-block one">
        {/* Left Text */}
        <div className="text1">
          <h4>Find Doctor</h4>
          <h1>Find the right doctor according to your complaint</h1>
          <p>
            HealthCare.ly is a free health app that goes beyond matching you with doctors.
            It actively helps you find the right doctor based on your medical and personal needs 
            and connects you with your HealthCarely community for ongoing support throughout 
            your journey to healthier living.
          </p>
          <ul>
            <li>✅ 100% free app designed to help you find the right doctor for you.</li>
            <li>✅ Available 900 doctors specialist</li>
          </ul>
          <button className="btn1">See the Doctors</button>
        </div>

        {/* Right Image */}
        <div className="image1">
          <img src={img4} alt="background circle" className="circle-bg" />
          <img src={img1} alt="Doctor" className="main-doctor" />
          {/* <img src={img3} alt="Doctor card" className="doctor-card" /> */}
        </div>
      </div>

      {/* ====== SECOND SECTION ====== */}
      <div className="doctor-block two">
        {/* Left Image */}
        <div className="image2">
          <img src={img2} alt="schedule doctor" className="image22" />
        </div>

        {/* Right Text */}
        <div className="text2">
          <h4>Make a Schedule</h4>
          <h1>Make a schedule in advance with the available doctors</h1>
          <p>
            Healthcare is a very painful process, especially if you're not taking care of your health
            and having regular check-ups. HealthCarely makes it easier for everyone to schedule a doctor's 
            appointment in just a few clicks.
          </p>
          <ul>
            <li>✅ Making a schedule online is easy</li>
            <li>✅ Easy to connect with doctor</li>
          </ul>
          <button className="btn2">Make Schedule Now</button>
        </div>
      </div>

    </section>
  );
};

export default Doctors;
