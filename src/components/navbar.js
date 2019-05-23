import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

import './style.scss'

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
          >
          </a>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a className="button"
                href="resume.pdf" >
                <span className="icon">
                  <FaFilePdf size="fa-2x"/>
                </span>
                <span>Download resume</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar
