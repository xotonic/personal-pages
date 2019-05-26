import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaStar } from 'react-icons/fa'
import './style.scss'
import './skills.scss'

const PLTitle = props => {
  let stars = []
  for (let i = 0; i < props.total; i++) {
    let color = i < props.score ? 'yellow' : 'white'
    stars.push(<span className="icon">
      <FaStar size="fa-2x" color={color}/>
    </span>
    )
  }
  return (
    <h4 className="title is-4">
      <span>{props.children}</span>
      <span className="stars-cntnr">{stars}</span>
    </h4>
  )
}
const ProgrammingLanguage = props => (
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
        <h2 className="project-name title is-2">Skills</h2>
        <div className="columns">{
          data.allDataYaml
            .nodes[0].resume
            .skills.programming_languages
            .map((value, i) => <ProgrammingLanguage skill={value}/>)
        }</div>
      </div>
    }
  />
)

export default Skills
