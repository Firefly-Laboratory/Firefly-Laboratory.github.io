import React from "react"
import PropTypes from "prop-types"
import { Layout as AntdLayout } from "antd"
import Navigation from './navigation';

const { Header, Footer, Content } = AntdLayout

const Layout = ({ defKey, children }) => {
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
        <Navigation defKey={defKey} />
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
