import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <h1 className="logo">About<span>Me.</span></h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="intro">
        <div className="intro-text">
          <h2>Hello, Welcome</h2>
          <h1>I’m Prosenjit Dey</h1>
          <p>A passionate DevOps learner with experience in AWS cloud.</p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="intro-img">
          <img src="/clearoff.png" alt="Prosenjit Dey" />
        </div>
      </header>
    </div>
  );
}

export default Home;
