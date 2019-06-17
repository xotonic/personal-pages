import React from 'react'
import './style.scss'
import { StaticQuery, graphql } from 'gatsby'

const About = () => (
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
      <div id="group-about" className="prlx-group">
        <section className="prlx-layer prlx-base backgrnd section">
          <div className="container">
            <div className="content is-medium about">
              <h2>About</h2>
              <p>{ data.allDataYaml.nodes[0].resume.about }</p>
            </div>
          </div>
        </section>
      </div>
    }
  />
)

export default About
