import React from 'react';
import './CSS/b.css';
export function About() {
  return (
    <section className="about-us">
      <div className="about">
        <div className="text">
          <h2>About Us</h2>
          <h5>ORGANIC STORE</h5>
          <p className='about-p'>
            Welcome to our vegetable paradise, where crisp freshness and vibrant colors meet to inspire you. We are dedicated to bringing you a diverse selection of farm-fresh vegetables, handpicked with love and care, ensuring every bite is a celebration of nature's bounty. Join us in savoring the essence of health, taste, and sustainability, as we nurture a greener tomorrow.
          </p>
          <div className="data">
            <a href="#" className="Learn">Learn More</a><br/><br/>
            <button className='Learn' onClick={() => window.open("https://vegetable-ca78.onrender.com")}>Prediction </button>
          </div>
        </div>
      </div>
    </section>
  );
}