import React from 'react'
import './Faq.css'

const Faq = () => {
    return (
        <>
            <section id="faq" className="faq">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <ul className="faq-list">

                        <li>
                            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">How do I create an account on the Medicare website?? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                To create an account, click on the "Sign Up" button on the homepage and follow the prompts to enter your details.                                </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Can I search for specific medicines on the Medicare platform? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                Yes, you can easily search for medicines using our user-friendly search feature. Simply enter the medicine name in the search bar.                                </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">How do I book an appointment with a doctor through Medicare? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                Booking appointments is easy. Navigate to the "Book Appointment" section, choose your preferred doctor, and select a suitable time slot.                                </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">What is telemedicine, and how can I avail of this service on Medicare? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                Telemedicine allows virtual consultations with healthcare professionals. You can schedule a telemedicine appointment through the platform and connect with your doctor remotely.                                </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">How is my personal information protected on the Medicare platform? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                We prioritize user privacy. Your personal information is securely stored and protected using advanced encryption and security measures.                                </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Can I access Medicare on my mobile device? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                Yes, our platform is designed to be mobile-friendly, allowing you to access and manage your healthcare needs conveniently from your smartphone or tablet.                                </p>
                            </div>
                        </li>

                    </ul>

                </div>
            </section>

        </>
    )
}

export default Faq
