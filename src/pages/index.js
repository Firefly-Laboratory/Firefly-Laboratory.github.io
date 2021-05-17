import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from '../components/post-card'

const IndexPage = ({ data }) => (
  <Layout defKey="home">
    <SEO title="首页" />
    <div className="container">
      <div className="f-article-highlights article--grid__container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
