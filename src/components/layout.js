import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Layout as AntdLayout } from "antd"
import Headroom from "headroom.js";
import Navigation from './navigation';
import Footer from './footer';

const { Header, Footer: AntdFooter, Content } = AntdLayout

const Layout = ({ defKey, children }) => {

  useEffect(() => {
    if (Headroom.cutsTheMustard) {
      const headerElement = document.querySelector("header")
      const headroom  = new Headroom(headerElement);
      headroom.init();
    }
  }, [])

  return (
    <AntdLayout>
      <Header
        id="header"
        className="headroom"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100%",
          padding: 0,
        }}
      >
        <Navigation defKey={defKey} />
      </Header>
      <Content
        style={{
          padding: "24px 50px",
          marginTop: 64,
          minHeight: "100vh", //edit this to change minimum page height
        }}
      >
        <div style={{ color: 'var(--textNormal)', background: 'var(--bg)' }}>{children}</div>
      </Content>
      <AntdFooter className="main-footer-wrapper">
        <Footer />
      </AntdFooter>
    </AntdLayout>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
