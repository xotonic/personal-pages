import React from 'react'

import './style.scss'
import Helmet from './helmet'
import Header from './header'
import ParallaxHeader from './parallaxHeader'
import Midsection from './midsection'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="prlx-origin">
    <Helmet />
    <ParallaxHeader />
    <Midsection />
  </div>
)

export default Layout
