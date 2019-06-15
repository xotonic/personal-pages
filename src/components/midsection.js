import React from 'react'
import './style.scss'
import Timeline from './timeline'
import Skills from './skills'
import { StaticQuery, graphql } from 'gatsby'

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
        <section className="section">
          <div className="container">
            <div className="content is-medium about">
              <h2>About</h2>
              <p>{ data.allDataYaml.nodes[0].resume.about }</p>
            </div>
          </div>
        </section>
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
    }
  />
)

export default Midsection
