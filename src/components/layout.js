import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Layout as AntdLayout, Menu, Row, Col } from "antd"
import Toggle from './Toggle';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import firefly from '../assets/firefly.png';

const { Header, Footer, Content } = AntdLayout

const Layout = ({ defKey, children }) => {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  });

  return (
    <AntdLayout>
      <Header
        id="header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: 0,
        }}
      >
        <Row style={{ flexFlow: 'nowrap', height: 64 }}>
          <Col xxl={4} xl={5} lg={6} md={6} sm={24} xs={24}>
            <Link to="/" id="logo">
              <img alt="logo" className="logo" src={firefly} />
              Firefly Laboratory
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24} className="menu-row">
            <Menu
              mode="horizontal"
              selectedKeys={[defKey]}
              id="nav"
            >
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="page2">
                <Link to="/page-2/">Page 2</Link>
              </Menu.Item>
              <Menu.Item key="404">
                <Link to="/404/">Secret page</Link>
              </Menu.Item>
            </Menu>
            <div className="header-white-space" />
            <div className="header-button header-switch-button">
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
          </Col>
        </Row>
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
    </AntdLayout>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
