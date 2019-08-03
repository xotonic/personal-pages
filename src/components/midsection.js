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
  </div>
)

export default Midsection
