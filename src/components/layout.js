import React from 'react'

import './style.scss'

import Helmet from './helmet'
import ParallaxHeader from './parallaxHeader'
import Footer from './footer'
import Timeline from './timeline'
import Skills from './skills'
import TitleBlock from './titleblock'
import About from './about'

const Layout = ({ children }) => (
  <div className="prlx-origin">
    <Helmet />
    <ParallaxHeader />
    <About/>
    <TitleBlock rootId="group-timeline-title">
      <h1 className="project-name title is-2">Career timeline</h1>
    </TitleBlock>
    <Timeline/>
    <TitleBlock rootId="group-skills-title">
      <h2 className="project-name title is-2">Skills</h2>
    </TitleBlock>
    <Skills/>
    <section id="group-wip" className="prlx-group section">
      <div className="prlx-layer prlx-base container">
        <p className="content">
                Work on this page is still in progress...
        </p>
      </div>
    </section>
    <Footer/>
  </div>
)

export default Layout
