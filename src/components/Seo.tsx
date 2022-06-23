import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title?: string;
  pagePath?: string;
  description?: string;
}

const Seo = (props: Props) => {
  const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(
      graphql`
      query SEO {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `
  )

  const title = props.title
    ? `${props.title} | ${site?.siteMetadata?.title}`
    : site.siteMetadata.title

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  )
}

export default Seo
