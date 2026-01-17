import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial/testimonial.css';
import './index.css';
import { Star } from "lucide-react";
import olumideImg from './assets/Olumide.jpg';
import zaneleImg from './assets/Zanele.jpg';
import vector from './assets/Vector.png';


function Testimonials() {
  const steps = [
    {
      num: '#1',
      title: 'Discovery & Alignment',
      description: 'We start by understanding your goals, challenges, and vision. This helps us define a clear direction for the project.'
    },
    {
      num: '#3',
      title: 'Development & Build',
      description: 'We turn the designs into fast, reliable, and scalable digital products using modern technologies.'
    },
    {
      num: '#5',
      title: 'Quality Assurance & Refinement',
      description: 'We rigorously test the product across devices, browsers, and screen sizes.'
    },
    {
      num: '#2',
      title: 'Design Sprint',
      description: 'We design high-fidelity layouts, interfaces, and interactions in focused 3-5 day cycles'
    },
    {
      num: '#4',
      title: 'Deploy',
      description: 'After testing and final refinements, we launch your product and ensure everything works perfectly.'
    },
    {
      num: '#6',
      title: 'Launch & Handover',
      description: 'We prepare the product for deployment, finalize all configurations, and ensure everything works in the live environment'
    }
  ];
  return (
    <>
      {/* Testimonials */}
      <section className="p-3 font-archivo testimonial-section">
        <div className="container">
          <p className="text-success fw-semibold text-center mb-2 fs-4 font-archivo">Testimonial</p>
          <h2 className="text-center fw-bold mb-5 display-5 font-archivo">What our clients say</h2>

          <div className="row g-4">
          {/* Testimonial 1 */}
            <div className="col-md-6">
              <div className="cards shadow-sm p-4 h-100">
                <div className="text-success text-center display-4 mb-3">
                  <img
                    src={vector}
                    alt="vector"
                    style={{
                      width: "3%",
                      height: "auto",
                      display: "inline-flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  />
                  <img
                    src={vector}
                    alt="vector"
                    style={{
                      width: "3%",
                      height: "auto",
                      display: "inline-flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  />
                </div>
                <p className="text-black mb-4 font-archivo">
                  Before DevCheque, our program was chaotic and hard to scale. The app they built modernized everything personalized workouts, smooth tracking, higher engagement, and triple retention. They didn't just build an app; they strengthened our entire business.
                </p>

                <div className="d-flex align-items-center justify-content-center">
                {/* Image wrapper */}
                  <div
                    className="rounded-circle overflow-hidden me-3"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src={olumideImg}
                      alt="Olumide"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <p className="fw-bold mb-1 font-archivo">Olumide Adebayo</p>
                    <div className="d-flex text-success">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-6">
              <div className="cards shadow-sm p-4 h-100">
                <div className="text-success text-center display-4 mb-3">
                <img
                    src={vector}
                    alt="vector"
                    style={{
                      width: "3%",
                      height: "auto",
                      display: "inline-flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  />
                  <img
                    src={vector}
                    alt="vector"
                    style={{
                      width: "3%",
                      height: "auto",
                      display: "inline-flex",
                      margin: "0 auto",
                      alignItems: "center",
                    }}
                  />
                </div>
                <p className="text-black mb-4 font-archivo">
                  Our old brand made us look smaller than we were. DevCheque fixed that with a modern identity and a website built for enterprise clients. Clear messaging and confident visuals improved our credibility, and within weeks it qualified leads grew. They truly elevated our business for good.
                </p>

                <div className="d-flex align-items-center justify-content-center">
                {/* Image wrapper */}
                  <div
                    className="rounded-circle overflow-hidden me-3"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src={zaneleImg}
                      alt="Zanele"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                    
                  <div>
                    <p className="fw-bold mb-1 font-archivo">Zanele Khumalo</p>
                    <div className="d-flex text-success">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                      <Star size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Development Works */}
      <section id='work' className="work-section bg-white">
        <div className="work-container">
          <h2 className="work-title">How we work</h2>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-trophy">🏆</div>

            <div className="steps-grid">
              {/*- Row 1 - Steps 1, 3, 5 -->*/}
              <div className="step-card row-1">
                <div className="step-header">
                  <span className="step-number">#1</span>
                  <h3 className="step-title">Discovery & Alignment</h3>
                </div>
                <p className="step-description">
                  We start by understanding your goals, challenges, and vision. This helps us define a clear direction for the project.
                </p>
              </div>

              <div className="step-card row-1">
                <div className="step-header">
                  <span className="step-number">#3</span>
                  <h3 className="step-title">Development & Build</h3>
                </div>
                <p className="step-description">
                  We turn the designs into fast, reliable, and scalable digital products using modern technologies.
                </p>
              </div>

              <div className="step-card row-1">
                <div className="step-header">
                  <span className="step-number">#5</span>
                  <h3 className="step-title">Quality Assurance & Refinement</h3>
                </div>
                <p className="step-description">
                  We rigorously test the product across devices, browsers, and screen sizes.
                </p>
              </div>

              {/*} Row 2 - Steps 2, 4, 6 -->*/}
              <div className="step-card row-2">
                <div className="step-header">
                  <span className="step-number">#2</span>
                  <h3 className="step-title">Design Sprint</h3>
                </div>
                <p className="step-description">
                  We design high-fidelity layouts, interfaces, and interactions in focused 3–5-day cycles
                </p>
              </div>

              <div className="step-card row-2">
                <div className="step-header">
                  <span className="step-number">#4</span>
                  <h3 className="step-title">Deploy</h3>
                </div>
                <p className="step-description">
                  After testing and final refinements, we launch your product and ensure everything works perfectly.
                </p>
              </div>

              <div className="step-card row-2">
                <div className="step-header">
                  <span className="step-number">#6</span>
                  <h3 className="step-title">Launch & Handover</h3>
                </div>
                <p className="step-description">
                  We prepare the product for deployment, finalize all configurations, and ensure everything works in the live environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Testimonials;