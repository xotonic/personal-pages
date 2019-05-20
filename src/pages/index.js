import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Resume from "../components/resume"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Dmitriy Kuzmin (@xotonic)" />
    <h1>About me</h1>
    <Resume/>
    <a href='resume.pdf'>Download PDF</a>
  </Layout>
)

export default IndexPage
