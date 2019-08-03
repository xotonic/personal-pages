import React from 'react'
import './style.scss'
import Timeline from './timeline'
import Skills from './skills'
import About from './about'

const Midsection = () => (
  <div className="has-background">
    <About/>
    <Timeline/>
    <Skills/>
    <section className="section">
      <div className="container">
        <p className="content">
                    Work on this page is still in progress...
        </p>
      </div>
    </section>
  </div>
)

export default Midsection
