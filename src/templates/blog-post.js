import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/layout"
import Image from '../components/image'

export default class BlogPost extends React.Component {
  componentDidMount() {
    let pre = window.location.hash || ''
    if (pre)
      document.querySelector(`.table-of-contents a[href*="${pre}"]`).className = 'active'
    let all = document.querySelectorAll(`.table-of-contents a`)
    for (let item of Array.from(all)) {
      item.addEventListener('click', e => {
        if (pre) {
          let menuItem = document.querySelector(`.table-of-contents a[href*="${pre}"]`)
          menuItem.className = ''
        }
        item.className = 'active'
        pre = item.hash
      })
    }
    document.addEventListener('scroll', e => {
      let list = Array.from(document.querySelectorAll('h2,h3,h4,h5,h6'))
      if (list.length === 0) return
      let passedList = []
      for (let item of list) {
        let top = item.getBoundingClientRect().top
        if (top <= 50) passedList.push(item)
      }
      if (!passedList.length) return // 第一条的情况
      let last = passedList[passedList.length - 1]
      if (pre !== last.hash) {
        if (pre) {
          let preItem = document.querySelector(`.table-of-contents a[href*="${pre}"]`)
          if (preItem) preItem.className = ''
        }
        let menuItem = document.querySelector(
          `.table-of-contents a[href*="${encodeURIComponent(last.id)}"]`
        )
        menuItem.className = 'active'
        pre = menuItem.hash
      }
    })
  }
  render () {
    const { data } = this.props
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
                      <Link to={`/author/${_.kebabCase(post.frontmatter.author)}`} className="bio-image-link">
                        <div className="bio-image-wrapper">
                          <Image className="bio-image-image"
                                 name={`${_.kebabCase(post.frontmatter.author)}`}
                                 width="100" height="100" alt={post.frontmatter.author} />
                        </div>
                      </Link>
                    </figure>
                  </div>
                  <div className="l-author-bio-content author__desc" id="author__desc">
                    <div className="author__desc__title">
                      <Link to={`/author/${_.kebabCase(post.frontmatter.author)}`} className="show-more-link">
                        关于作者 {post.frontmatter.author} 更多信息
                      </Link>
                    </div>
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
                </header>
              </div>

              <div className="c-garfield-aside--meta">
                <ul className="meta-box meta-box--article">
                  <li className="meta-box--item meta-box--tags">收录于：</li>
                  <li className="meta-box--item meta-box--tags">
                    {
                      post.frontmatter.tags.map((tagName, index) => {
                        return <Link to={`/tags/${_.kebabCase(tagName)}/`} key={index}>{tagName}</Link>
                      })
                    }
                  </li>
                </ul>
                <div className="table-of-contents" dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
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
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        author
      }
      excerpt
    }
  }
`