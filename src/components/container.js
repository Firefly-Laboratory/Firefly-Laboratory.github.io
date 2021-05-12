import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"
import Toggle from './Toggle';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
const { Header, Footer, Content } = Layout

const Container = ({ defKey, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  });

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ margin: "margin 0", float: "left" }}>
            <Link to="/" style={{ color: "white" }}>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <div style={{ float: "right", padding: "6px 0px 6px" }}>
            {theme !== null ? (
              <Toggle
                icons={{
                  checked: (
                    <img
                      src={moon}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: 'none' }}
                    />
                  ),
                  unchecked: (
                    <img
                      src={sun}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: 'none' }}
                    />
                  ),
                }}
                checked={theme === 'dark'}
                onChange={e =>
                  window.__setPreferredTheme(
                    e.target.checked ? 'dark' : 'light'
                  )
                }
              />
            ) : (
              <div style={{ height: '24px' }} />
            )}
          </div>
          <Menu
            style={{ float: "right" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={defKey}
          >
            <Menu.Item key="1">
              <Link to="/page-2/">Page 2</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/404/">Secret page</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content
        style={{
          padding: "24px 50px",
          marginTop: 64,
          minHeight: "100vh", //edit this to change minimum page height
        }}
      >
        <div style={{ color: 'var(--textNormal)', background: 'var(--bg)', maxWidth: "900px", margin: "0 auto" }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} made by alienCY ^__^
      </Footer>
    </Layout>
  )
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
