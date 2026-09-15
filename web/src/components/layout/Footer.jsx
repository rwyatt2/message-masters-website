import React from 'react'
import HeptagonMark from '../fx/HeptagonMark'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <HeptagonMark size={44} strokeWidth={4} />
              MESSAGE<em>MASTERS</em>
            </div>
            <div className="foot-lockup">Built on Purpose</div>
            <p className="foot-tag">We help companies discover what they are worth and build everything that says it.</p>
          </div>
          <div>
            <div className="foot-h">Navigate</div>
            <ul className="foot-links">
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#proof">Proof</a></li>
              <li><a href="#order">The Order</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="foot-h">The Firm</div>
            <p className="foot-meta">
              Argyle &amp; Roanoke, Texas<br />
              Founded January 2023<br />
              message-master.com
            </p>
          </div>
        </div>
        <div className="foot-bar">
          <span>Message Masters · Discover your value. Share it with the world.</span>
          <span>Version 4.0 · {year}</span>
        </div>
      </div>
    </footer>
  )
}
