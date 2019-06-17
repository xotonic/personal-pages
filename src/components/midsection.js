import React from 'react'
import './style.scss'
import Timeline from './timeline'
import Skills from './skills'
import { StaticQuery, graphql } from 'gatsby'
import Footer from './footer'
import TitleBlock from './titleblock'
import About from './about'

const Midsection = () => (
  <StaticQuery
    query={graphql`
        query {
          allDataYaml {
            nodes {
              resume {
                about
              }
            }
          }
        }
    `}

    render={ data =>
      <div>
        <About/>
        <TitleBlock>
          <h1 className="project-name title is-2">Career timeline</h1>
        </TitleBlock>
        <Timeline/>
        <TitleBlock>
          <h2 className="project-name title is-2">Skills</h2>
        </TitleBlock>
        <Skills/>
        <section className="prlx-group section">
          <div className="prlx-layer prlx-base container">
            <p className="content">
                    Work on this page is still in progress...
            </p>
          </div>
        </section>
        <Footer/>
      </div>
    }
  />
)

export default Midsection
