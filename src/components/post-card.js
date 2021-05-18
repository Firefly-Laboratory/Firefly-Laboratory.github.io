import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Image from './image'

const PostCard = ({ node }) => {
  return (
    <div className="post-card f-article-item">
      <article className="article--post">
        <header>
          <div className="article--post__image">
            <figure role="presentation" className="bio-image">
              <Link to={`/author/${_.kebabCase(node.frontmatter.author)}`} className="bio-image-link">
                <div className="bio-image-wrapper">
                  <Image name={`${_.kebabCase(node.frontmatter.author)}`}
                         className="bio-image-image"
                         width="100" height="100" alt={node.frontmatter.author} />
                </div>
              </Link>
            </figure>
          </div>
          <span className="article--post__author-name">
            <Link to={`/author/${_.kebabCase(node.frontmatter.author)}`} className="author-post__author-title">{node.frontmatter.author}</Link>
            {/*<em className="light-grey"> 写了 </em>*/}
          </span>
        </header>
        <h1 className="article--post__title">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h1>
        <div className="article--post__content">
          <p className="article--post__teaser">{node.excerpt}</p>
        </div>
        <div className="article--post__content article--post__meta">
          <p>
            <time dateTime="2021-05-11" className="article--post__time">{node.frontmatter.date}</time>
            <em className="light-grey small"> 收录于 </em>
            {
              node.frontmatter.tags.map((tagName, index) => (
                <Link className="author-post__tag  mija" key={index} to={`/tags/${_.kebabCase(tagName)}/`}>{tagName}</Link>
              ))
            }
          </p>
        </div>
      </article>
    </div>
  );
}

export default PostCard
