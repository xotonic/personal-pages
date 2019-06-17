import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './timeline.scss'
import './style.scss'
import TitleBlock from './titleblock'
import { FaStar, FaExternalLinkSquareAlt } from 'react-icons/fa'

const IconedLink = props => (
  <a className="tl-link" href={props.href}><span>{props.children}</span><FaExternalLinkSquareAlt className="tl-link-icon"/></a>
)

const TimelineItem = ({ job, right }) => (
  <div className="timeline-item">
    <div className="timeline-icon">
      <FaStar className="tl-fa"/>
    </div>
    <div className={'timeline-content' + (right ? ' right' : '')}>
      <div className="tl-title">
        <div className="tl-job-title">{job.title}</div>
        <div className="tl-time">{job.from} - {job.to}</div>
        { job.employer && <div><IconedLink href={job.employer.link}>{job.employer.name}</IconedLink></div> }
      </div>
      <p>{job.description}</p>
    </div>
  </div>
)

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
              }
            }
          }
        }
    `}

    render={ data =>
      <div className="backgrnd">
        <TitleBlock>
          <h1 className="project-name title is-2">Career timeline</h1>
        </TitleBlock>
        <div className="container">
          <section className="section">
            <div id="timeline">
              {
                data.allDataYaml.nodes[0].resume.experience
                  .map((value, index) =>
                    <TimelineItem job={value} right={index % 2 === 1}/>)
              }
            </div>
          </section>
        </div></div>
    }
  />
)

export default Timeline
