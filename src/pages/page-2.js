import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SecondPage = () => (
  <Layout defKey="page2">
    <SEO title="Page two" />
    <h1>Hi from the second page!</h1>
    <p>Welcome to page 2! <br/>
      Check out that blue highlight on the header! <br/>
    </p>
    <Button type="primary" icon={<SearchOutlined />}>
      Example button from readme.md
   </Button>
   <p><br/>Check out that useful button!</p>
  </Layout>
)

export default SecondPage
