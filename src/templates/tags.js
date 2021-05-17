import React from "react"
import PropTypes from "prop-types"
// Components
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from '../components/post-card'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `有 ${totalCount} 篇文章收录于 "${tag}"`
  return (
    <Layout defKey={tag}>
      <SEO title={tag} />
      <div className="container">
        <h1 className="tag-info light-grey" style={{ fontSize: 12, textAlign: "center", marginBottom: 16 }}>{tagHeader}</h1>
        <div className="f-article-highlights article--grid__container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostCard key={node.id} node={node} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
          excerpt
        }
      }
    }
  }
`
