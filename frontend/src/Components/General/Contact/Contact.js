import React, { useState } from 'react'
import './Contact.css'

import { toast } from 'react-toastify';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const SendMessage = async (e) => {
        e.preventDefault();

        const requestBody = {
            name, email, subject, message
        };

        try {
            const response = await fetch("http://localhost:6500/api/auth/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            const responseData = await response.json();
            // console.log("response", responseData);
            // console.log("response status : ", response.status);

           if (response.status === 201) {
                toast.success("Message Submitted Successfull");
                console.log("Message Submitted Registration");

                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                
                // navigate("/Signup_Login");

            }
            else {
                toast.error("Internal Server Error");
                console.log("error inside response ", "error");
            }
        } catch (error) {
            toast.error("Failed to fetch. Check console for details.");
            console.error("Error:", error);
        }
    };

    return (
        <>
            <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row" >

                        <div className="col-lg-6" data-aos="fade-right">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>A - 123, Modi Palace , Red Fort Road, Delhi</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@healthease.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 mt-4 mt-md-0" data-aos="fade-left">
                            <form role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required
                                            name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required
                                            name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required
                                        name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" rows="5" placeholder="Message" required
                                        name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                {/* <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div> */}
                                <div className="text-center">
                                    {/* <button type="submit"></button> */}
                                    <button type="button" class="btn btn-primary mt-3" onClick={SendMessage}>Send Message</button>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Contact
