import React from 'react'
import './style.scss'
import { StaticQuery, graphql } from 'gatsby'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contacts = () => (
  <StaticQuery
    query={graphql`
        query {
          allDataYaml {
            nodes {
              resume {
                contacts {
                  email
                  linkedin
                  github
                }
              }
            }
          }
        }
    `}
    render = { data =>
      <section className="section">
        <div className="container">
          <div className="content is-medium">
            <div className="columns">
              <div className="column has-text-centered">
                <span className="icon">
                  <a href={ 'https://' + data.allDataYaml.nodes[0].resume.contacts.github}>
                    <FaGithub size="200%" color="white" />
                  </a>
                </span>
              </div>
              <div className="column has-text-centered">
                <span className="icon">
                  <a href={ 'mailto:' + data.allDataYaml.nodes[0].resume.contacts.email}>
                    <FaEnvelope size="200%" color="white" />
                  </a>
                </span>
              </div>
              <div className="column has-text-centered">
                <span className="icon">
                  <a href={ 'https://' + data.allDataYaml.nodes[0].resume.contacts.linkedin}>
                    <FaLinkedin size="200%" color="white" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
  />
)

export default Contacts
