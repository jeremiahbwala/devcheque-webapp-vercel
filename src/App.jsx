import 'bootstrap/dist/css/bootstrap.min.css';
import './App/App.css'
import './index.css';
import React, { useState } from 'react';
import { Menu, X, Rocket, Users, Award, Star } from 'lucide-react';
import logo from './assets/image 1.png';
import backgroundImage from './assets/background1.jpg';
import heroImage from './assets/bgimage.jpg';
import statsImg from './assets/stats.png';

function DevChequeWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center w-100">
            
            {/* Logo */}
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="logo" />
            </a>

            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-4 align-items-center mx-auto font-archivo">
              <a href="#about" className="text-center text-dark text-decoration-none fw-bold fs-5 font-archivo">About us</a>
              <a href="#projects" className="text-center text-dark text-decoration-none fw-bold fs-5 font-archivo">Projects</a>
              <a href="#services" className="text-center text-dark text-decoration-none fw-bold fs-5 font-archivo">Services</a>
              <a href="#work" className="text-center text-dark text-decoration-none fw-bold fs-5 font-archivo">How we work</a>
            </div>

            {/* CTA Button Desktop */}
            <button className="btn navbar-cta rounded-pill px-4 d-none d-lg-block font-archivo">
              <a href="#contactForm" className='text-decoration-none text-white font-archivo'>Start Your Project</a>
            </button>

            {/* Mobile Toggle */}
            <button
              className="btn border-0 d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="d-lg-none mt-3">
              <div className="d-flex flex-column gap-3">
                <a href="#about" className="text-dark text-decoration-none font-archivo">About us</a>
                <a href="#projects" className="text-dark text-decoration-none font-archivo">Projects</a>
                <a href="#services" className="text-dark text-decoration-none font-archivo">Services</a>
                <a href="#work" className="text-dark text-decoration-none font-archivo">How we work</a>
                <button className="btn btn-success rounded-pill font-archivo">
                  <a href="#contactForm" className='text-decoration-none text-white font-archivo'>Start Your Project</a>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="position-relative overflow-hidden"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '100px',
        }}
      >
        <div className="container position-relative">
          <div className="text-center text-white" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Tagline */}
            <p className='hero-text font-archivo'>
              Design.Develop.Deploy
            </p>

            {/* Main Heading */}
            <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: '1.2', color: '#00ff00' }}>
              <span className="font-archivo">Get Your </span>
              <span className="font-archivo">Product Launched</span>
              <span className="font-archivo"> in </span>
              <span className="font-archivo">Weeks</span>
            </h1>

            {/* Description */}
            <p className='font-archivo' style={{ maxWidth: '750px', fontSize: '18px', lineHeight: '1.7', margin: '0 auto' }}>
              DevCheque is your full-stack team for digital products that ship.<br />
              From branding to UI/UX and development, we handle it all. Launch faster with top-tier quality
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
              <button 
                className="btn hero-button hero-btn1 btn-lg px-5 rounded-pill d-inline-flex align-items-center justify-content-center"
                style={{ fontSize: '16px',  fontWeight: '500' }}
              >
                <a href="#contactForm" className='text-white text-decoration-none font-archivo'>Start Your Project</a>
                <span className="ms-2">→</span>
              </button>
              <button 
                className="btn hero-btn2 btn-outline-light bg-white btn-lg px-5 rounded-pill d-inline-flex align-items-center justify-content-center"
                style={{ fontSize: '16px', fontWeight: '500' }}
              >
                <a href="#projects" className='text-black text-decoration-none font-archivo'>View Our Work</a>
                <span className="ms-2 text-black">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
         <img src={heroImage} alt="Hero" className="hero-image" />
        </div>

      </section>


      {/* Stats Section */}
      <section className="stat-section">
  <div className="stats-wrapper">
    <img src={statsImg} alt="stats" className="stats-image" />
  </div>
</section>

    </div>
  );
}

export default DevChequeWebsite;