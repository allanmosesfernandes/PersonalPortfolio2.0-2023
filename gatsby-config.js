/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 *
 * 
 */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true,
      },
    },

    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Fira Code",
            file: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap",
          },
          {
            name: "Space Mono",
            file: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
          },
        ],
      },
    },
  ],
};
