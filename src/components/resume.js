import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Resume = () => (
  <StaticQuery
    query={graphql`
        query {
          allDataYaml {
            nodes {
              resume {  }
            }
          }
        }
    `}
    render={ data =>
      <div>
        { data.allDataYaml.nodes.map((value, index) =>
          <div>Salary: {value.resume.salary} { value.resume.skills.map((val, i) => <div>- {val}</div>)}</div>) }
      </div>
    }
  />
)
export default Resume
