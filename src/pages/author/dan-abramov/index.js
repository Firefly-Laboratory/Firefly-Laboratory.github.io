import React from "react"
import PropTypes from "prop-types"
// Components
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import PostCard from '../../../components/post-card'

const Index = ({ data }) => {
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `作者 Dan Abramov 有 ${totalCount} 篇文章`
  return (
    <Layout>
      <SEO title="Dan Abramov " />
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
Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }),
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: "Dan Abramov" } } }
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
            author
          }
          excerpt
        }
      }
    }
  }
`
