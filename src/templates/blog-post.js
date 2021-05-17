import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/layout"
import profileImage from '../images/dan-abramov.jpg';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container article-container">
        <div className="article__content">
          <div className="c-garfield-the-cat">
            <div className="c-garfield-bio">
              <div className="l-author-bio">
                <div className="bio-image__large">
                  <figure role="presentation" className="bio-image">
                    <Link to={`/author/dan-abramov`} className="bio-image-link">
                      <div className="bio-image-wrapper">
                        <picture>
                            <img className="bio-image-image"
                                 src={profileImage}
                                 width="100" height="100" alt="Dan Abramov" />
                        </picture>
                      </div>
                    </Link>
                  </figure>
                </div>
                <div className="l-author-bio-content author__desc" id="author__desc">
                  <h3 className="author__desc__title">关于作者</h3>
                  <p>
                    Dan Abramov是Redux作者。
                    <Link to={`/author/dan-abramov`} className="show-more-link">Dan Abramov 更多信息</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="c-garfield-header">
              <header className="article-header">
                <ul className="article-header--meta">
                  <li className="article-header--meta-item article-header--meta-item__date">
                    <time className="article-header--date" dateTime="2021-05-14">{post.frontmatter.date}</time>
                  </li>
                </ul>
                <h1 className="article-header--title">{post.frontmatter.title}</h1>
                <div data-component="EditButton" data-collection="articles"
                     data-path="articles/2021-05-14-tree-shaking-reference-guide.md">
                </div>
              </header>
            </div>

            <div className="c-garfield-aside--meta">
              <ul className="meta-box meta-box--article">
                <li className="meta-box--item meta-box--tags">
                  {
                    post.frontmatter.tags.map((tagName, index) => {
                      return <Link to={`/tags/${_.kebabCase(tagName)}/`} key={index}>{tagName}</Link>
                    })
                  }
                </li>
              </ul>
            </div>

            <div className="c-garfield-summary" id="article__start">
              <section aria-label="quick summary" className="article__summary">
                {post.excerpt}
              </section>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
      excerpt
    }
  }
`
