import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'
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

    if (recaptchaRef.current.getValue()) {
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

    if (recaptchaRef.current.getValue()) {

      setCaptchaValid(true);

      sendEmail();
    }
    else {

      setCaptchaValid(false);

    }


  }

  const sendEmail = () => {
    if (contactname && email && message) {
      if (isValidEmail(email)) {

        const publicKey   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId   = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId  = import.meta.env.VITE_EMAILJS_TEMPLATE;

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
      else {
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
                <input type="text" id="name" placeholder="Mr Munster" value={contactname} onChange={e => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="munster@mail.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder='Mr SD, may we talk about ...' value={message} onChange={e => setMessage(e.target.value)} required />
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
          <ul>
            <li>
              <h3>Find me on : </h3>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/samy-pelaez/" target="_blank">
                <img className="icon-social" src="assets/icon-linkedin.gif" alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PelaezSamy" target="_blank">
                <img className="icon-social" src="assets/icon-twitter.gif" alt="" />
              </a>
            </li>
          </ul>

        </section>
        <section className="contact-section">
        <span id="span-data-protection">
            All the data treated in this website is ruled by : 
            <ul>
              <li>
                <a href="https://fedlex.data.admin.ch/eli/cc/1993/1945_1945_1945">FADP : Federal Act on Data Protection</a>
              </li>
              <li>
                <a href="https://gdpr.eu/tag/gdpr/">GDPR : European General Data Protection Regulation</a>
              </li>
            </ul>
          </span>
        </section>
        

      </div>
    </div>
  )

}
