import React from 'react'
import './style.scss'

import Navbar from './navbar'
import Header from './header'


const ParallaxHeader = props => (
      <div id="group-hero" className="prlx-group">
        <div className="prlx-layer prlx-base">
            <Header/>
        </div>
        <div className="prlx-layer prlx-back prlx-bg"></div>
      </div>
)

export default ParallaxHeader
