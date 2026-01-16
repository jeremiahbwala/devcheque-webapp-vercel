import 'bootstrap/dist/css/bootstrap.min.css';
import './Case Study/caseStudy.css'
import React from 'react';
import { Rocket, CheckCircle, TrendingUp } from "lucide-react";

// Import images at the top
import caseStudy1 from './assets/casestudy.jpg';
import caseStudy2 from './assets/casestudy2.jpg';
import caseStudy3 from './assets/casestudy3.jpg';

function CaseStudy() {
  // All your case study data in ONE place
  const caseStudies = [
    {
      id: 1,
      image: caseStudy2,
      title: 'App Design For Firefit',
      description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish',
      alignment: 'start' // For alternating layout
    },
    {
      id: 2,
      image: caseStudy3,
      title: 'E-Commerce Platform Redesign',
      description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish',
      alignment: 'end' // For alternating layout
    },
    {
      id: 3,
      image: caseStudy1,
      title: 'Fintech Mobile App',
      description: 'FitTrack was created to simplify digital coaching for fast-growing fitness communities. We transformed their traditional WhatsApp and spreadsheet workflow into a seamless mobile experience. With a cross-platform app built around real user need. coaches can onboard clients, track progress, manage plans, and improve accountability. Firefit delivers reliable performance, personalized training and a smooth experience from start to finish',
      alignment: 'start' // For alternating layout
    }
  ];
  const benefits = [
    {
      icon: '🚀',
      title: 'Launch in Weeks, Not Months',
      description: 'We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.'
    },
    {
      icon: '🤝',
      title: 'Full-Stack Experience',
      description: 'We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.'
    },
    {
      icon: '📊',
      title: 'Result Oriented',
      description: 'We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.'
    }
  ];

  return (
    <>
      <section id="projects" className="case-section py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-3 display-5 font-archivo">
            Case Studies
          </h2>
          <p className="text-center text-black mb-5 font-archivo">
            Explore our recent projects and see how we've helped brands achieve their goals
          </p>

          <div className="case-list">
            {/* CARD 1 - LEFT */}
            <div className="case-card left">
              <img src={caseStudy2} alt="Fitness App" className="case-image" />
              <div className="case-content font-archivo">
                <h3>Fitness App Development</h3>
                <p>
                  We built a cross-platform fitness app that replaced Firefit’s manual
                  workflow, boosted retention 3x, cut admin work by 55%, hit 2,000+ downloads
                  in month one, and improved workout consistency by 40%.
                </p>
              </div>
            </div>

            {/* CARD 2 - RIGHT */}
            <div className="case-card right">
              <img src={caseStudy3} alt="E-commerce Redesign" className="case-image" />
              <div className="case-content font-archivo">
                <h3>Rebrand and Website Redesign</h3>
                <p>
                  We rebranded CamSecure and rebuilt their website with a modern identity,
                  clearer messaging, and improved UX resulting in 40% more qualified leads,
                  a 31% drop in bounce rate, and consistent branding across all channels.
                </p>
              </div>
            </div>

            {/* CARD 3 - LEFT */}
            <div className="case-card left">
              <img src={caseStudy1} alt="Fintech App" className="case-image" />
              <div className="case-content font-archivo">
                <h3>Tradeport Website Redesign</h3>
                <p>
                  We redesigned TradePort’s website with cleaner navigation, stronger messaging,
                  and a modern Webflow build boosting qualified leads by 48%, improving load time
                  to 1.8s, increasing engagement, and cutting bounce rate by 28%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Work With Us */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="why-title font-archivo">Why Work With DevCheque?</h2>
          <p className="why-subtitle font-archivo">What makes us different from other agencies</p>

          <div className="benefits-grid">
            {/* First Row - Two Cards */}
            <div className="benefit-card">
              <div className="icon-wrapper">
                🚀
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title font-archivo">Launch in Weeks, Not Months</h3>
                <p className="benefit-description font-archivo">
                  We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="icon-wrapper">
                🤝
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title font-archivo">Full-Stack Experience</h3>
                <p className="benefit-description font-archivo">
                  We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
            </div>

            {/* Second Row - One Centered Card */}
            <div className="benefit-card full-width">
              <div className="icon-wrapper">
                📊
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title font-archivo">Result Oriented</h3>
                <p className="benefit-description font-archivo">
                  We handle everything from branding, design, frontend, backend, deployment. No multiple vendors, no handoff gaps. One team, one point of contact, seamless execution from concept to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;