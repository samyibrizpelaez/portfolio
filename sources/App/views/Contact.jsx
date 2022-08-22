import React, { useState } from 'react';
import { FaTwitter, FaLinkedin } from "react-icons/fa";


const submit = () => {
  if (contactname && email && message) {
    // TODO - send mail

    setName('');
    setEmail('');
    setMessage('');
    setEmailSent(true);
  } else {
    alert('Please fill in all fields.');
  }
}


export function ContactPage() {
  const [contactname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div>
      <h1 id="page-title">Contact</h1>
      <div id="page-content">
        <section className="contact-section">
          <h2>Contact me</h2>
          <form >
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
            <button type="submit" onClick={submit}>Send Message</button>
            <span className={emailSent ? 'visible' : null}>Thank you for your message! I will contact you as soon as possible.</span>
          </form>
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
