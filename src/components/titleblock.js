import React from 'react'
import './style.scss'
import './titleblock.scss'

const TitleBlock = props => (
  <div id={props.rootId} className="prlx-group">
    <div className="prlx-layer prlx-base a-block">
      <div className="a-content">{props.children}</div>
    </div>
    <div className="prlx-layer prlx-back prlx-bg"/>
  </div>
)
export default TitleBlock
