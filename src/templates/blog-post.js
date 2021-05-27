import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import Layout from "../components/layout"
import Image from '../components/image'

const { Link: AnchorLink } = Anchor;

const AnchorLinkStatus = {
  NONE: 'none',
  EXPAND: 'expand',
  FLOD: 'flod',
}

const getAnchorLinks = (tableOfContents) => {
  // https://github.com/gatsbyjs/gatsby/issues/19487
  // Deploying to netlify : error "document" is not available during server side rendering
  if (typeof window === 'undefined' || !window.document) {
    return [];
  }
  const temp = document.createElement('div');
  temp.innerHTML = tableOfContents;
  const nodes = temp.childNodes;

  const parseUl = (node) => {
    if (!node) {
      return [];
    }
    const items = node.childNodes;
    const result = [];

    for (let i = 0, len = items.length; i < len; i += 1) {
      const item = items[i];
      if (item.tagName === 'LI') {
        const link = {};
        const childs = item.childNodes;
        childs.forEach((child) => {
          if (child.tagName === 'A') {
            link.href = decodeURIComponent((child).hash);
            link.title = child.innerText;
          } else if (child.tagName === 'P') {
            link.href = decodeURIComponent((child.childNodes[0]).hash);
            link.title = (child.childNodes[0]).innerText;
          } else if (child.tagName === 'UL') {
            link.children = parseUl(child);
          }
        });
        link.status = link.children
          ? AnchorLinkStatus.EXPAND
          : AnchorLinkStatus.NONE;
        result.push(link);
      }
    }

    return result;
  };
  return parseUl(nodes[0]);
}

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  useEffect(() => {
    deckDeckGoHighlightElement();
  }, []);

  const [anchorLinks, setAnchorLinks] = useState(() =>
    getAnchorLinks(post.tableOfContents)
  , []);

  const changeAnchorLinkStatus = (link) => {
    const tLink = link;
    const { status } = link;
    const nextStatus =
      status === AnchorLinkStatus.EXPAND
        ? AnchorLinkStatus.FLOD
        : AnchorLinkStatus.EXPAND;
    tLink.status = nextStatus;
    setAnchorLinks([...anchorLinks]);
  };

  const renderAnchorLinks = (links) =>
    links.map((link) => (
      <React.Fragment key={link.href}>
        {link.status === AnchorLinkStatus.EXPAND && (
          <CaretDownOutlined
            style={{ color: '#8c8c8c' }}
            onClick={() => changeAnchorLinkStatus(link)}
          />
        )}
        {link.status === AnchorLinkStatus.FLOD && (
          <CaretRightOutlined
            style={{ color: '#8c8c8c' }}
            onClick={() => changeAnchorLinkStatus(link)}
          />
        )}
        <AnchorLink
          href={link.href}
          title={link.title}
          className={link.children ? 'parent' : 'children'}
        >
          {link.children &&
          link.status === AnchorLinkStatus.EXPAND &&
          renderAnchorLinks(link.children)}
        </AnchorLink>
      </React.Fragment>
    ));

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
                    关于作者 <Link to={`/author/${_.kebabCase(post.frontmatter.author)}`} className="show-more-link">
                      {post.frontmatter.author}
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
              <div className="table-of-contents">
                <Anchor
                  className={'apiAnchor'}
                  offsetTop={80}
                >
                  {renderAnchorLinks(anchorLinks)}
                </Anchor>
              </div>
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

export default BlogPost

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
