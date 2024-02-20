import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <section id="about">
        <div class="container" data-aos="fade-up">

          <div className="section-title">
            <h2>About Us</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div class="row no-gutters">
            <div class="content col-xl-5 d-flex align-items-stretch" data-aos="fade-right">
              <div class="content">
                <h3>About HealthEase</h3>
                <p>
                  Welcome to HealthEase, your trusted healthcare companion dedicated to providing accessible, reliable, and personalized healthcare services. At HealthEase, we believe that everyone deserves convenient access to high-quality medical care and accurate health information.
                </p>
                {/* <a href="#" class="about-btn">About us <i class="bx bx-chevron-right"></i></a> */}
              </div>
            </div>
            <div class="col-xl-7 d-flex align-items-stretch" data-aos="fade-left">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon-heading">
                      <i class="bx bx-receipt"></i>
                      <h4>Vision</h4>
                    </div>
                    <p>"To redefine healthcare accessibility and empower individuals to take control of their well-being."</p>
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-heading">

                      <i class="bx bx-cube-alt"></i>
                      <h4>Mission</h4>
                    </div>

                    <p>"To provide seamless access to high-quality healthcare services and information, for a healthier and happier community."</p>
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-heading">

                      <i class="bx bx-images"></i>
                      <h4>Purpose</h4>
                    </div>

                    <p>"To bridge the gap between patients and healthcare providers, offering personalized and innovative solutions that prioritize accessibility, empathy, and excellence in care."</p>
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-heading">

                      <i class="bx bx-shield"></i>
                      <h4>Team</h4>
                    </div>

                    <p>Behind HealthEase is a dedicated team of healthcare professionals, technologists, and innovators passionate about revolutionizing the healthcare industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="services" >
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Services</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4 class="title"><a href="">Doctor Appointment Booking</a></h4>
                <p class="description text-start mt-5">Easily find and book appointments with experienced doctors specialized in various fields. Whether you need an in-person consultation or prefer a telemedicine appointment, our platform makes scheduling healthcare appointments convenient and hassle-free.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4 class="title"><a href="">Medicine Search</a></h4>
                <p class="description text-start mt-5">Access a comprehensive database of medicines for common ailments, along with detailed information on dosage, usage, and side effects. You can also check real-time availability in local pharmacies and conveniently order medicines online for delivery to your doorstep.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4 class="title"><a href="">Telemedicine Services</a></h4>
                <p class="description text-start mt-5"> Connect with qualified healthcare professionals from the comfort of your home through secure and reliable telemedicine consultations. Whether you're seeking medical advice, follow-up care, or second opinions, our telemedicine services enable you to receive quality healthcare without the need for physical appointments.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4 class="title"><a href="">Chatbot Assistance</a></h4>
                <p class="description text-start mt-5">Get accurate and reliable health information and guidance through our user-friendly chatbot. Whether you have questions about symptoms, medications, or general health concerns, our chatbot provides instant assistance, helping you make informed decisions about your health and well-being.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default About
