import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ/FAQ.css'
import React, { useState } from 'react';

function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { 
      q: 'What services does DevCheque offer?', 
      a: 'DevCheque delivers end-to-end digital product design and development, including UI/UX design, web development, mobile apps, and branding.' 
    },
    { 
      q: 'Do you only design, or do you also build/develop?', 
      a: 'We do both - full design and development services. We handle everything from initial wireframes to final deployment.' 
    },
    { 
      q: 'What industries or types of businesses do you work with?', 
      a: 'We work with startups and businesses across various industries including fintech, e-commerce, health & fitness, and SaaS platforms.' 
    },
    { 
      q: 'How long does a typical project take?', 
      a: 'Project timelines vary based on scope and complexity. A simple landing page takes 2-3 weeks, while full apps take 8-12 weeks.' 
    },
    { 
      q: "What's your process? How involved do I need to be?", 
      a: 'We follow a collaborative process with regular check-ins. You\'ll be involved in key decisions but we handle the day-to-day execution.' 
    },
    { 
      q: 'Do you work with clients outside Nigeria?', 
      a: 'Yes, we work with clients globally. We have experience working remotely with teams across Africa, Europe, and North America.' 
    },
    { 
      q: 'Do you offer payment plans or flexible payment options?', 
      a: 'Yes, we offer flexible payment arrangements including milestone-based payments and installment plans for larger projects.' 
    },
    { 
      q: "What if I'm not satisfied with the work?", 
      a: 'We work closely with you until you\'re satisfied. Our process includes regular reviews and revisions at key milestones.' 
    },
    { 
      q: 'What technologies do you use?', 
      a: 'We use modern tech stacks tailored to your needs - React, Node.js, Django, React Native, and more. We choose the best tools for each project.' 
    },
    { 
      q: 'Will I own the code and design files?', 
      a: 'Yes, you own all deliverables upon project completion and final payment. We provide full source code and design files.' 
    },
    { 
      q: 'Do you provide ongoing support and maintenance after launch?', 
      a: 'Yes, we offer post-launch support packages including bug fixes, updates, and feature enhancements.' 
    },
    { 
      q: 'Do you sign NDAs (Non-Disclosure Agreements)?', 
      a: 'Yes, we are happy to sign NDAs to protect your confidential information and business ideas.' 
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-center text-secondary mb-0">
            Everything you need to know about working with DevCheque
          </p>
        </div>
      </section>

      <section className="faq-grid-section">
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              className="faq-item" 
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-header">
                <div className="faq-left">
                  <div className="faq-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="faq-question">{faq.q}</h3>
                </div>
                <div className="faq-toggle">
                  {openFaq === index ? '×' : '+'}
                </div>
              </div>
              <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
          Have More Questions?
        </h2>
        <a href="#contactForm" className="cta-button">
          Get in Touch
        </a>
      </section>
    </>
  );
}

export default FAQ;