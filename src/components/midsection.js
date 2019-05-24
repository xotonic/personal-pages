import React from 'react'
import './style.scss'
import Timeline from './timeline'

const Midsection = () => (
  <div>
    <section className="section">
      <div className="container">
        <div className="content is-medium">
          <h2>About me</h2>
          <p>
            Software engineer with 2+ years of work experience.
            Developing solutions in various fields from telecommunications
            management and marketing to cutting-edge researches of blockchain technology.
            Constantly investing in education and learning new tools for making better products.
            Seeking for further gaining and sharing experience as a software developer.
          </p>
        </div>
        <Timeline/>
      </div>
    </section>
  </div>
)

export default Midsection
