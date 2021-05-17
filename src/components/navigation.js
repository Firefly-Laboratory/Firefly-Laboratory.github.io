import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'gatsby';
import { Menu, Row, Col } from 'antd';
import Toggle from './toggle';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import firefly from '../assets/firefly.png';

const Navigation = ({ defKey }) => {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
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
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="Articles">
            <Link to="/tags/articles/">文章</Link>
          </Menu.Item>
          <Menu.Item key="Guides">
            <Link to="/tags/guides/">教程</Link>
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
                    alt="checked"
                  />
                ),
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                    alt="unchecked"
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
  );
}

export default Navigation
