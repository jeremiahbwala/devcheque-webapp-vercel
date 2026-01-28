import 'bootstrap/dist/css/bootstrap.min.css';
import './Team/team.css';
import './index.css';
import React, { useState, useEffect } from 'react';

import BolajiImage from './assets/team/Bolaji.jpeg';
import OlutadeImage from './assets/team/Olutade.jpeg';
import FortuneImage from './assets/Fortune.jpeg';
import ChideraImg from './assets/team/Chidera.jpeg';
import SodiqImg from './assets/team/Sodiq.jpeg';
import AboutImage from './assets/About.jpeg';
import SeunImg from './assets/Seun.jpeg';

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Bolaji',
      role: 'Team Lead',
      experience: '4+ years',
      image: BolajiImage,
      description:
        'Bolaji is a seasoned design leader who turns complex challenges into structured, user-centered solutions.',
      skills: ['Product Design', 'UX Strategy', 'Design System', 'Prototyping'],
      expertise: 'Clean systems and strong design leadership.'
    },
    {
      name: 'Olutade',
      role: 'Team Lead',
      experience: '6+ years',
      image: OlutadeImage,
      description:
        'Olutade builds fast, scalable, and reliable digital products with clean engineering practices.',
      skills: ['Frontend', 'React', 'Architecture', 'Leadership'],
      expertise: 'High-quality builds with technical precision.'
    },
    {
      name: 'Fortune',
      role: 'Product Designer',
      experience: '4+ years',
      image: FortuneImage,
      description:
        'Fortune crafts intuitive and beautiful user experiences with a strong focus on usability.',
      skills: ['UI Design', 'Wireframing', 'Visual Design', 'Prototyping'],
      expertise: 'Visual excellence blended with usability.'
    },
    {
      name: 'Chidera',
      role: 'Frontend Engineer',
      experience: '5+ years',
      image: ChideraImg,
      description:
        'Chidera delivers pixel-perfect interfaces with consistency across all devices.',
      skills: ['React', 'Webflow', 'CSS Architecture', 'Responsive Design'],
      expertise: 'Precision implementation and clean UI.'
    },
    {
      name: 'Seun',
      role: 'Front-End Developer',
      experience: '3+ years',
      image: SeunImg,
      description:
        'Seun builds scalable and accessible components with clean, maintainable code.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Accessibility'],
      expertise: 'Smooth interactions and reusable components.'
    },
    {
      name: 'Sodiq',
      role: 'Backend Developer',
      experience: '5+ years',
      image: SodiqImg,
      description:
        'Sodiq ensures systems are secure, scalable, and optimized for performance.',
      skills: ['Node.js', 'APIs', 'Databases', 'Security'],
      expertise: 'Stable and scalable backend systems.'
    }
  ];

  const CARD_WIDTH = 360;

  // Duplicate team members enough times for smooth infinite scrolling
  const infiniteTeamMembers = [
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers
  ];

  // Start from the middle set on initial load
  useEffect(() => {
    setCurrentIndex(teamMembers.length * 2);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset position seamlessly when user gets too far in either direction
  useEffect(() => {
    if (currentIndex >= teamMembers.length * 16) {
      const timer = setTimeout(() => {
        setCurrentIndex(teamMembers.length * 2);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < teamMembers.length * 2) {
      const timer = setTimeout(() => {
        setCurrentIndex(teamMembers.length * 16 - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, teamMembers.length]);

  return (
    <>
      {/* About Section */} 
      <section id='about' className="about-section"> 
        <div className="about-container"> 
          <h2 className="about-title">About us</h2> 
          <div className="about-content"> <div> 
            <p className="about-text"> DevCheque began in 2019 when two developers, Bolaji and Olutade, set out to solve a real problem: 
              founders struggled to find reliable designers and developers who delivered quality work on time. 
            </p> 
            <p className="about-text"> 
              We built DevCheque on one promise deliver exceptional digital products without the agency BS. 
              No overpromising. No delays. No surprise fees. 
            </p> 
            <p className="about-text"> 
              Six years and 50+ projects later, that promise still drives us. We've helped fintech startups launch funded MVPs, 
              revamped e-commerce platforms that doubled conversions, and built apps users love. 
            </p> 
            <p className="about-text"> 
              Today, DevCheque is a full-stack product partner from first wireframe to deployment. Whether you're a new founder or a 
              growing business, we treat your project like it's our own. 
            </p> 
            <p className="about-text">Let's build something great.</p> 
            <div> 
              <button className="start-project-btn"> 
                <a href="#contactForm" className='start-project-btn'>Start Project</a> 
              </button> 
            </div> 
          </div> 
          <div className="about-image-wrapper"> 
            <img src={AboutImage} alt="DevCheque team meeting" className="about-image" /> 
          </div> 
        </div> 
      </div> 
    </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            {/* LEFT ARROW */}
            <button className="slider-arrow left" onClick={handlePrev}>
              &#10094;
            </button>

            <div className="team-header-center">
              <h3 className="team-title">Meet The Team</h3>
              <p className="team-subtitle">
                Experienced professionals dedicated to building quality products
              </p>
            </div>

            {/* RIGHT ARROW */}
            <button className="slider-arrow right" onClick={handleNext}>
              &#10095;
            </button>
          </div>

          {/* SLIDER */}
          <div className="slider-wrapper">
            <div
              className="team-slider"
              style={{
                transform: `translateX(-${currentIndex * CARD_WIDTH}px)`
              }}
            >
              {infiniteTeamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <img src={member.image} alt={member.name} />

                  <div className="card-content">
                    <h4>{member.name}</h4>
                    <p className="role">{member.role}</p>
                    <p className="description">{member.description}</p>

                    <div className="skills">
                      {member.skills.map((skill, idx) => (
                        <span key={idx}>{skill}</span>
                      ))}
                    </div>

                    <p className="expertise">
                      <strong>What they bring:</strong> {member.expertise}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;