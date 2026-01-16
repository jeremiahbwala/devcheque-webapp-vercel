import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Devchequewebsite from './App.jsx'
import Services from './Services'
import Team from './Team'
import FAQ from './FAQ'
import ContactForm from './ContactForm'
import Footer from './Footer'
import CaseStudy from './CaseStudy';
import Testimonials from './Testimonials'
import ErrorBoundary from "./ErrorBoundary.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Devchequewebsite />
    <CaseStudy />
    <Testimonials />
    <Services />
    <Team />
    <ContactForm />
    <FAQ />
    <Footer />
    <ErrorBoundary />
  </StrictMode>,
)
