import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaStar } from 'react-icons/fa'
import './style.scss'
import './skills.scss'
import TitleBlock from './titleblock'

const PLTitle = props => {
  let stars = []
  for (let i = 0; i < props.total; i++) {
    let color = i < props.score ? 'star' : 'star-inactive'
    stars.push(<span className="icon">
      <FaStar className={color} size="fa-2x"/>
    </span>
    )
  }
  return (
    <h4 className="title is-4">
      <span>{props.children}</span>
      <span className="stars">{stars}</span>
    </h4>
  )
}
const SkillItem = props => (
  <div className="content box column">
    <PLTitle total="5" score={props.skill.score}>{props.skill.name}</PLTitle>
    { props.skill.related
      ? <div className="tags are-large">
        {props.skill.related.map((value, i) =>
          <span className="tag is-light">{value.name}</span>)}
      </div>
      : null
    }
  </div>
)

const Skills = () => (
  <StaticQuery
    query={graphql`
        query {
          allDataYaml {
            nodes {
              resume {
                skills {
                  programming_languages {
                    name
                    score
                    related {
                      name
                      link
                    }
                  }
                }
              }
            }
          }
        }
    `}

    render={ data =>
      <div>
        <TitleBlock>
          <h2 className="project-name title is-2">Skills</h2>
        </TitleBlock>
        <section className="section">
          <div className="container">
            <div className="columns content">
              {
                data.allDataYaml
                  .nodes[0].resume
                  .skills.programming_languages
                  .map((value, i) => <SkillItem skill={value}/>)
              }
            </div>
          </div>
        </section>
      </div>
    }
  />
)

export default Skills
