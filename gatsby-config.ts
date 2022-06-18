import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "My Gatsby Site",
    siteUrl: "https://www.yourdomain.tld"
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typegen",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "modalimages",
        path: `${__dirname}/src/images/modal`
      }
    }
  ]
}

export default config
