import React, { useState, useRef } from 'react';
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';


export function ContactPage() {
  
  const [contactname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [captchaValid, setCaptchaValid] = useState(null);
  const [emailSent, setEmailSent] = useState(false);
  
  const recaptchaRef = useRef(null);

  // Captcha Validation
  const onChange = () => {

    if(recaptchaRef.current.getValue())
    {
      console.log(recaptchaRef.current.getValue())

      //Validate token with google
    }
    
  }

  // Email syntax validation
  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = (e) => {
  
    e.preventDefault();

    if(recaptchaRef.current.getValue())
    {
      //valid 
      setCaptchaValid(true);

      sendEmail();
    }
    else
    {
      //valid 
      setCaptchaValid(false);
      // not valid
    }

      
  }

  const sendEmail = () => {
    if (contactname && email && message) {
      if(isValidEmail(email)){

        const publicKey = 'ulX6BcWLt4ekOb1kY';
        const serviceId = 'service_tjzcn3l';
        const templateId = 'template_r0x891b';
        const templateParams = {
          from_name: contactname,
          email: email,
          message: message,
          reply_to: email,
          name: contactname,
        };
  
        emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then(response => console.log(response))
          .then(error => console.log(error));
  
        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
        
      }
      else{
        alert('Invalid Email');
      }
    }
    else {
      alert('Please fill in all fields.');
    }
  }

  return (

    <div>
      <h1 id="page-title">Contact</h1>
      <div id="page-content">
        <section className="contact-section">
          <h2>Contact me</h2>

          {!emailSent && !captchaValid &&

            <form onSubmit={submit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" value={contactname} onChange={e => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder='Your Message' value={message} onChange={e => setMessage(e.target.value)} required />
              </div>

              <ReCAPTCHA
                className={'g-recaptcha'}
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />

              <button id="contactBtn" type="submit">Send Message</button>
            </form>

          }

          {captchaValid == false &&

            <span className="captchaSpan negativeSpan">Please accept the captcha.</span>

          }

          {emailSent &&

            <span className="captchaSpan positiveSpan">Thank you for your message! I will contact you as soon as possible.</span>
          
          }
        </section>
        <section className="contact-section">
          <h2>Find me on social media</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/samy-pelaez/" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PelaezSamy" target="_blank">
                <FaTwitter />
              </a>
            </li>
          </ul>

        </section>

      </div>
    </div>
  )

}
