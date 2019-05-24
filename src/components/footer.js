import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './emoji'

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
              Made with Gatsby, Bulma, StackOverflow
          </p>
          <article className="media center">
            <span className="icon">
              <a href={data.site.siteMetadata.github}>
                <FaGithub size="fa-2x" color="white" />
              </a>
            </span>
            &nbsp;
          </article>
            &nbsp;
        </div>
      </footer>
    )}
  />
)

export default Footer
