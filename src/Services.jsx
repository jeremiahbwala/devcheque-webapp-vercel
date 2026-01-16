import 'bootstrap/dist/css/bootstrap.min.css';
import './Service/service.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
import './index.css';
import WebImg from './assets/Web.png';
import MobileImg from './assets/Mobile.png';
import UIImg from './assets/UI.png'; 
import { Code, Smartphone } from "lucide-react";

function Services() {
    return (
      <section id="services" class="font-archivo service-section">
  <div class="container">
    <h2 class="text-center fw-bold font-archivo">Our Services</h2>
    <p class="text-center text-black font-archivo">
      Comprehensive digital solutions tailored to bring your vision to life
    </p>

    <hr class="service-divider"/>

    <div class="services-grid">
      {/*-- UI/UX Design */}
      <div class="service-item">
        <div class="service-icon">
          <img
            src={UIImg}
            alt="vector"
            style={{
              width: "4rem",
              height: "4rem",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h3 class="font-archivo">UI/UX Design</h3>
        <p class="font-archivo">
          We design intuitive, visually striking interfaces rooted in user research, smart wireframes, and polished prototypes, all crafted to delight users and strengthen your brand.
        </p>
      </div>

      {/*- Mobile Apps */}
      <div class="service-item">
        <div class="service-icon">
          <img
            src={MobileImg}
            alt="vector"
            style={{
              width: "4rem",
              height: "4rem",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h3 class="font-archivo">Mobile Apps</h3>
        <p class="font-archivo">
          We build fast, user friendly native and cross-platform apps that deliver seamless experiences across iOS and Android.
        </p>
      </div>

      {/*- Branding */}
      <div class="service-item">
        <div class="service-icon">
          <img
            src={MobileImg}
            alt="vector"
            style={{
              width: "4rem",
              height: "4rem",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h3 class="font-archivo">Branding</h3>
        <p class="font-archivo">
          We create cohesive brand identities, from logos to full guidelines, that help you stand out and connect with your audience.
        </p>
      </div>

      {/*-- Web Development */}
      <div class="service-item">
        <div class="services-icon">
          <img
            src={WebImg}
            alt="vector"
            style={{
              width: "3rem",
              height: "3rem",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h3 class="font-archivo">Web Development</h3>
        <p class="font-archivo">
          We build fast, scalable, and secure websites from landing pages to full web apps optimized for performance.
        </p>
      </div>
    </div>
  </div>
</section>
    )
}

export default Services;