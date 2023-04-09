import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const Form = () => {
  const form = useRef();
  const navigate = useNavigate()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_38kpioq', 'template_pjs5p96', form.current, 'EbhDO87gC1f14SXqC')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          window.alert("Thanks for your email we will be working on it")
               navigate('/')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Subject</label>
        <input type='text' name="subject"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message"/>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form

