import React, { useEffect } from 'react'
import './Appointment.css'
import { useNavigate } from 'react-router-dom';


const Appointment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:6004/add-appointment', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then((res) => {
        console.log('Response Status:', res.status);
        return res.json();
      })
      .then((data) => {
        console.log('Response Data:', data);
        if (data.error === 'Unauthorized: No token provided') {
          navigate('/Login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   fetch('http://localhost:6004/add-appointment', {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     credentials: "include"

  //   }).then((res) => {
  //     // dispatch({ type: "USER", payload: false })
  //     if (res.status === 404) {
  //       navigate('/Login');

  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // },[]);
  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Appointment</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>


        </div>
      </section>
    </>
  )
}

export default Appointment
