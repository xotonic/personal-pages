import React from 'react'
import './style.scss'
import './titleblock.scss'

const TitleBlock = props => (
  <div className="a-block">
    <div className="a-content">{props.children}</div>
  </div>
)
export default TitleBlock
