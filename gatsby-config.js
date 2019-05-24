module.exports = {
  siteMetadata: {
    title: `Dmitriy Kuzmin`,
    description: `Personal page of Dmitriy Kuzmin, Software developer`,
    author: `Dmitriy Kuzmin`,
    imageUrl: `https://avatars2.githubusercontent.com/u/11139333`,
    keywords: `Sofware Engineer, Developer, CV, Resume, Portfolio`,
    github: `https://github.com/xotonic`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6f2232`,
        theme_color: `#6f2232`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140823183-1'
      }
    }
  ]
}
