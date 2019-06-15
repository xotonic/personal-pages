import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './timeline.scss'
import './style.scss'
import TitleBlock from './titleblock'
import { FaStar } from 'react-icons/fa'

const TimelineItem = ({ job, right }) => (
  <div className="timeline-item">
    <div className="timeline-icon">
      <FaStar className="tl-fa"/>
    </div>
    <div className={'timeline-content' + (right ? ' right' : '')}>
      <div className="tl-title">
        <div>{job.title}</div>
        <div>{job.from} - {job.to}</div>
        { job.employer && <div>{job.employer.name}</div> }
      </div>
      <p>{job.description}</p>
    </div>
  </div>
)

const ysection = (data) => data.allDataYaml.nodes[0].resume
const ymerge = (fields, mapper) =>
  fields.map(v => mapper()[v]).reduce((acc, cur) => acc.concat(cur))

const Timeline = () => (
  <StaticQuery
    query={graphql`
        query {
          allDataYaml {
            nodes {
              resume {
                experience {
                  title
                  description
                  from
                  to
                  employer {
                    name
                    link
                  }
                }
                education {
                  title
                  description
                  from
                  to
                }
              }
            }
          }
        }
    `}

    render={ data =>
      <div>
        <TitleBlock>
          <h1 className="project-name title is-2">Career timeline</h1>
        </TitleBlock>
        <div className="container">
          <section className="section">
            <div id="timeline">
              {
                ymerge(['experience', 'education'], () => ysection(data))
                  .map((value, index) =>
                    <TimelineItem job={value} right={index % 2 === 1} />)
              }
            </div>
          </section>
        </div></div>
    }
  />
)

export default Timeline
