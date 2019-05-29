import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './timeline.scss'
import './style.scss'
import TitleBlock from './titleblock'
import { FaStar } from 'react-icons/fa'

const TimelineItem = props => (
  <div className="timeline-item">
    <div className="timeline-icon">
      <FaStar className="tl-fa"/>
    </div>
    <div className={'timeline-content' + (props.right ? ' right' : '')}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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
                }
                education {
                  title
                  description
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
        <div className="tl-container">
          <section className="section">
            <div id="timeline">
              {
                ymerge(['experience', 'education'], () => ysection(data))
                  .map((value, index) =>
                    <TimelineItem
                      title={value.title}
                      description={value.description}
                      right={index % 2 === 1} />)}
            </div>
          </section>
        </div></div>
    }
  />
)

export default Timeline
