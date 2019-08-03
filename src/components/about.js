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
    render= {data =>
      <section className="section">
        <div className="container">
          <div className="content is-medium about">
            <h2>About</h2>
            <p>{ data.allDataYaml.nodes[0].resume.about }</p>
          </div>
        </div>
      </section>
    }
  />
)

export default About
