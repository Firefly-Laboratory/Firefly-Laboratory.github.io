import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
  console.log(allMarkdownRemark)
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer__topics open">
          <h4 className="footer__topics__title" id="topics">查看所有主题的文章</h4>
          <ul className="footer__topics__list">
            {
              allMarkdownRemark.group.map((tagItem, index) => {
                return (
                  <li className="footer__topics__item">
                    <Link key={index}>{tagItem.tag}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
