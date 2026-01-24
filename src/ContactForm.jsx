import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact Form/contact.css';
import React, { useState } from 'react';
import { API_ENDPOINTS, buildHeaders, logApiCall } from './config/api';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function ContactForm() {
  const [budgetRange, setBudgetRange] = useState([5000, 25000]);

  const handleBudgetChange = (value) => {
    setBudgetRange(value);
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    company: '',
    projectTypes: [],
    budget: 5000,
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  

  const handleProjectTypeToggle = (type) => {
    setFormData(prev => {
      const isSelected = prev.projectTypes.includes(type);
      const updatedTypes = isSelected
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type];
      return { ...prev, projectTypes: updatedTypes };
    });
  };

  const handleSubmit = async () => {
    console.log("🚀 === FORM SUBMISSION START ===");
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      console.log("❌ Validation failed");
      setError("Please fill in all required fields");
      return;
    }

    try {
      console.log("✅ Validation passed");
      setLoading(true);
      setError('');
      setSuccess(false);

      const payload = {
        name: formData.fullName,
        email: formData.email,
        message: formData.message,
        company: formData.company,
        project_type: formData.projectTypes.join(", "),
        budget_range: `$${budgetRange[0].toLocaleString()} - $${budgetRange[1].toLocaleString()}`,
        honeypot: formData.honeypot
      };

      console.log("📦 Payload being sent:", payload);

      
      console.log("📡 Sending request to:", API_ENDPOINTS.form);
      logApiCall(API_ENDPOINTS.form, { 
        method: 'POST', 
        headers: buildHeaders(), 
        body: JSON.stringify(payload) 
      });

      const res = await fetch(
        API_ENDPOINTS.form,
        {
          method: "POST",
          headers: buildHeaders(),
          body: JSON.stringify(payload)
        }
      );

      console.log("📥 Response received!");
      console.log("   Status Code:", res.status);
      console.log("   Status OK?:", res.ok);

      if (!res.ok) {
        console.log("❌ Response not OK, handling error...");
        const errorText = await res.text();
        console.error("   Error Response:", errorText);
        
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText };
        }
        
        throw new Error(errorData.message || errorData.error || `Server error: ${res.status}`);
      }

      // Check response type
      const contentType = res.headers.get("content-type");
      console.log("📄 Response Content-Type:", contentType);

      let responseData;
      if (contentType && contentType.includes("application/json")) {
        responseData = await res.json();
        console.log("✅ JSON Response Data:", responseData);
      } else {
        responseData = await res.text();
        console.log("⚠️ TEXT Response Data:", responseData);
      }

      console.log("🎉 SUCCESS! Setting success state...");
      setSuccess(true);
      setError('');

      console.log("🧹 Clearing form...");
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        message: '',
        company: '',
        projectTypes: [],
        budget: 5000,
        honeypot: ''
      });
      setBudgetRange([5000, 25000]);

      console.log("✅ Form cleared successfully!");

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        console.log("👋 Hiding success message now");
        setSuccess(false);
      }, 5000);

    } catch (err) {
      console.error("💥 === ERROR CAUGHT ===");
      console.error("Error Object:", err);
      console.error("Error Message:", err.message);
      
      setError(err.message || "Error sending message. Please try again.");
      setSuccess(false);
    } finally {
      console.log("🏁 Setting loading to false");
      setLoading(false);
      console.log("=== FORM SUBMISSION END ===\n");
    }
  };

  return (
    <section id='contactForm' className="contact-section">
        <div className="contact-container">
          <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2.5rem', color: '#000' }}>
            Let's Talk About Your Project
          </h2>

          <div className="form-card">
            {success && (
              <div className="alert-custom alert-success section-light-green font-archivo">
                ✓ Message sent successfully!
                <button className="close-btn font-archivo" onClick={() => setSuccess(false)}>×</button>
              </div>
            )}
            
            {error && (
              <div className="alert-custom alert-danger font-archivo">
                {error}
                <button className="close-btn font-archivo" onClick={() => setError('')}>×</button>
              </div>
            )}

            {/* Name & Email Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div className="form-name-field">
                <label className="form-label-custom font-archivo">
                  Full Name <span className="required-tag font-archivo">(Required)</span>
                </label>
                <input
                  type="text"
                  className="input-custom font-archivo"
                  placeholder="Type here"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-email-field">
                <label className="form-label-custom font-archivo">
                  Email <span className="required-tag font-archivo">(Required)</span>
                </label>
                <input
                  type="email"
                  className="input-custom font-archivo"
                  placeholder="Type here"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Company */}
            <div className="form-field">
              <label className="form-label-custom font-archivo">
                Company/Organization <span className="optional-tag font-archivo">(optional)</span>
              </label>
              <input
                type="text"
                className="input-custom font-archivo"
                placeholder="Type here"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Project Type */}
            <div className="form-field">
              <label className="form-label-custom font-archivo">
                Project Type 
              </label>
              <div className="checkbox-grid font-archivo">
                {["Web Design", "Branding", "Mobile App Design", "Others"].map((type) => (
                  <div className="checkbox-item" key={type}>
                    <input
                      type="checkbox"
                      className="checkbox-custom font-archivo"
                      checked={formData.projectTypes.includes(type)}
                      onChange={() => handleProjectTypeToggle(type)}
                      id={type}
                    />
                    <label className="checkbox-label" htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget - UPDATED SECTION */}
            <div className="form-field">
              <label className="form-label-custom font-archivo">
                Project Budget
              </label>
              <p className='font-archivo' style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                Slide to indicate your budget range
              </p>
              <div style={{ padding: '20px 10px' }}>
                <Slider
                  range
                  min={5000}
                  max={500000}
                  step={1000}
                  value={budgetRange}
                  onChange={handleBudgetChange}
                  trackStyle={[{ backgroundColor: '#7cb342', height: 6 }]}
                  handleStyle={[
                    { 
                      backgroundColor: '#7cb342', 
                      borderColor: '#7cb342',
                      height: 20,
                      width: 20,
                      marginTop: -7,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    },
                    { 
                      backgroundColor: '#7cb342', 
                      borderColor: '#7cb342',
                      height: 20,
                      width: 20,
                      marginTop: -7,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }
                  ]}
                  railStyle={{ backgroundColor: '#424242', height: 6 }}
                />
              </div>
              <div className="budget-labels">
                <span className='font-archivo'>${budgetRange[0].toLocaleString()}</span>
                <span className='font-archivo'>${budgetRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Message */}
            <div className="form-message-field">
              <label className="form-label-custom font-archivo">
                Message <span className="required-tag font-archivo">(Required)</span>
              </label>
              <textarea
                className="textarea-custom font-archivo"
                rows="4"
                placeholder="Type here"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Honeypot */}
            <input
              type="text"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Submit Button */}
            <button
              className="submit-button font-archivo"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className='font-archivo' style={{ marginRight: '8px' }}>⟳</span>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>

            <p className="privacy-text font-archivo">
              We respect your privacy and we respond between 24 hrs
            </p>
          </div>
        </div>
      </section>
  );
}

export default ContactForm;