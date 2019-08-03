import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
            query SocialQuery {
                site {
                    siteMetadata {
                            github
                    }
                }
            }
            `}
    render={data => (
      <footer className="footer center has-background-black">
        <div className="content has-text-centered">
          <p className="is-size-6">
            <div>Made with Gatsby, Bulma, StackOverflow</div>
          </p>
          <a className="button is-link is-inverted is-outlined" href={data.site.siteMetadata.github}>View this site on GitHub</a>
        </div>
      </footer>
    )}
  />
)

export default Footer
