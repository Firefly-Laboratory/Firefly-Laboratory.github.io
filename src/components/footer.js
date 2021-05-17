import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

const Footer = () => {
  const { allMarkdownRemark = { group: [] } } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  )
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer__topics">
          <h4 className="footer__topics__title" id="topics">查看所有分类的文章</h4>
          <ul className="footer__topics__list">
            {
              allMarkdownRemark.group.map((tagItem, index) => {
                return (
                  <li className="footer__topics__item">
                    <Link to={`/tags/${_.kebabCase(tagItem.tag)}/`} key={index}>{tagItem.tag}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="copy-right">
          Firefly Laboratory  &copy; 2021
        </div>
      </div>
    </footer>
  );
}

export default Footer;
