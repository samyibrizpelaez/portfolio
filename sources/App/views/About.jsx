import React from 'react';

export function AboutPage()
{
  return (
    <div>
      <h1 id="page-title">About</h1>
      <div id="page-content">
        <section className="about-section">
          <h2>Technological Stack</h2>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>React Bootstrap</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Langage</h2>
          <ul>
            <li>French</li>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Methodologies</h2>
          <ul>
            <li>6 Hats</li>
            <li>CPM</li>
            <li>Agile</li>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>Git workflows</li>
          </ul>
        </section>
      </div>
    </div>
  )
  
}