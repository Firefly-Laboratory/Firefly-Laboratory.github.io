import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import profileImage from '../images/dan-abramov.jpg';

const PostCard = ({ node }) => {
  return (
    <div className="post-card f-article-item">
      <article className="article--post">
        <header>
          <div className="article--post__image">
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
          <span className="article--post__author-name">
            <Link to={`/author/dan-abramov`} className="author-post__author-title">Dan Abramov</Link>
            <em className="light-grey"> write </em>
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
