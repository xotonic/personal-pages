import React from 'react'
import './style.scss'
import Timeline from './timeline'
import Skills from './skills'
import About from './about'
import Contacts from './contacts'

const Midsection = () => (
  <div className="has-background">
    <About/>
    <Contacts/>
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
