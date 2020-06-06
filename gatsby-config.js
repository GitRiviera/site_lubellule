/*
IMPORTANT : Don't try to use gatsby-source-filesystem on a parent directory
of other directories you source. Causes problems for the other requests.
Probably a way to do it properly if needed though
*/
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lubellule`,
        path: `${__dirname}/src/images/lubellule_couture`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery_1`,
        path: `${__dirname}/src/images/gallery_1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery_2`,
        path: `${__dirname}/src/images/gallery_2`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
