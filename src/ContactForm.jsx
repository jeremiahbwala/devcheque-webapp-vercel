import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact Form/contact.css';
import React, { useState } from 'react';
import { API_ENDPOINTS, buildHeaders, logApiCall } from './config/api';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function ContactForm() {
  const [budgetRange, setBudgetRange] = useState([10, 100000]);
  const [showOthersDropdown, setShowOthersDropdown] = useState(false);
  const [selectedOtherType, setSelectedOtherType] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    company: '',
    projectTypes: [],
    budget: 100,
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // --- Handlers ---
  const handleBudgetChange = (value) => {
    setBudgetRange(value);
  };

  const handleProjectTypeToggle = (type) => {
    setFormData(prev => {
      const isSelected = prev.projectTypes.includes(type);
      const updatedTypes = isSelected
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type];

      if (type === "Others" && isSelected) {
        setShowOthersDropdown(false);
        setSelectedOtherType('');
      } else if (type === "Others" && !isSelected) {
        setShowOthersDropdown(true);
      }

      return { ...prev, projectTypes: updatedTypes };
    });
  };

  const handleOtherTypeSelect = (event) => {
    const value = event.target.value;
    setSelectedOtherType(value);

    setFormData(prev => {
      const filtered = prev.projectTypes.filter(t => t !== "Others" && !t.startsWith("Others:"));
      if (value) {
        return { ...prev, projectTypes: [...filtered, "Others", `Others: ${value}`] };
      }
      return { ...prev, projectTypes: [...filtered, "Others"] };
    });
  };

  const handleHoneypotChange = (event) => {
    setFormData({ ...formData, honeypot: event.target.value });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email) {
      setError("Please fill in all required fields");
      return;
    }

    try {
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

      logApiCall(API_ENDPOINTS.form, { 
        method: 'POST', 
        headers: buildHeaders(), 
        body: JSON.stringify(payload) 
      });

      const res = await fetch(API_ENDPOINTS.form, {
        method: "POST",
        headers: buildHeaders(),
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorText = await res.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }
        throw new Error(errorData.message || errorData.error || `Server error: ${res.status}`);
      }

      setSuccess(true);
      setError('');

      setFormData({
        fullName: '',
        email: '',
        message: '',
        company: '',
        projectTypes: [],
        budget: 100,
        honeypot: ''
      });
      setBudgetRange([100, 100000]);
      setShowOthersDropdown(false);
      setSelectedOtherType('');

      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      setError(err.message || "Error sending message. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
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

          {/* Name & Email */}
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
                onChange={(e) => handleInputChange('fullName', e.target.value)}
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
                onChange={(e) => handleInputChange('email', e.target.value)}
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
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </div>

          {/* Project Type */}
          <div className="form-field">
            <label className="form-label-custom font-archivo">Project Type</label>
            <div className="checkbox-grid font-archivo">
              {["Web Design", "Branding", "Mobile App Design", "Others"].map((type) => (
                <div key={type}>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      className="checkbox-custom font-archivo"
                      checked={formData.projectTypes.includes(type)}
                      onChange={() => handleProjectTypeToggle(type)}
                      id={type}
                    />
                    <label className="checkbox-label" htmlFor={type}>{type}</label>
                  </div>

                  {type === "Others" && showOthersDropdown && (
                    <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                      <select
                        className="input-custom font-archivo"
                        value={selectedOtherType}
                        onChange={handleOtherTypeSelect}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #ccc' }}
                      >
                        <option value="">Select project type...</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Social Media Graphics">Social Media Graphics</option>
                        <option value="SEO Services">SEO Services</option>
                        <option value="Content Writing">Content Writing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="form-field">
            <label className="form-label-custom font-archivo">Project Budget</label>
            <p className='font-archivo' style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              Slide to indicate your budget range
            </p>
            <div style={{ padding: '20px 10px 40px 10px', position: 'relative' }}>
              <Slider
                range
                min={100}
                max={100000}
                step={1000}
                value={budgetRange}
                onChange={handleBudgetChange}
                trackStyle={[{ backgroundColor: '#7cb342', height: 6 }]}
                handleStyle={[
                  { backgroundColor: '#7cb342', border: '4px solid #424242', height: 20, width: 20, marginTop: -7, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
                  { backgroundColor: '#7cb342', border: '4px solid #424242', height: 20, width: 20, marginTop: -7, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }
                ]}
                railStyle={{ backgroundColor: '#424242', height: 6 }}
              />
              <div style={{ position: 'relative', marginTop: '10px' }}>
                <span style={{ position: 'absolute', left: `${((budgetRange[0] - 100) / (100000 - 100)) * 100}%`, transform: 'translateX(-50%)', fontWeight: '600', fontSize: '14px' }}>
                  ${budgetRange[0].toLocaleString()}
                </span>
                <span style={{ position: 'absolute', left: `${((budgetRange[1] - 100) / (100000 - 100)) * 100}%`, transform: 'translateX(-50%)', fontWeight: '600', fontSize: '14px' }}>
                  ${budgetRange[1].toLocaleString()}
                </span>
              </div>
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
              onChange={(e) => handleInputChange('message', e.target.value)}
            ></textarea>
          </div>

          {/* Honeypot */}
          <input
            type="text"
            value={formData.honeypot}
            onChange={handleHoneypotChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Submit */}
          <button className="submit-button font-archivo" onClick={handleSubmit} disabled={loading}>
            {loading ? <>⟳ Sending...</> : "Submit"}
          </button>

          <p className="privacy-text font-archivo">
            We respect your privacy and we respond within 24 hrs
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;