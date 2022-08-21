import React from 'react';
import {FaTwitter, FaLinkedin} from "react-icons/fa";
export function ContactPage()
{
  return (
    <div>
      <h1 id="page-title">Contact</h1>
      <div id="page-content">
        <section className="contact-section">
        <h2>Contact me</h2>
        <form >
          <div>
            <label htmlFor="name">Name</label>
            <input placeholder="Your Name" type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" required />
          </div>
          <button type="submit">Send</button>
        </form>
        </section>
        <section className="contact-section">
          <h2>Find me on social media</h2>
          <ul>
            <li> 
              <a href="https://www.linkedin.com/in/samy-pelaez/" target="_blank">
                <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PelaezSamy" target="_blank">
                <FaTwitter/>
              </a>
            </li>
          </ul>

        </section>
        
      </div>
    </div>
  )
  
}
