import React from "react";
import {  Layout  } from "antd";
import { GithubOutlined,  } from "@ant-design/icons";

import './Layout.css';

const { Content, Footer } = Layout;


const LayoutView: React.FC = ({ children }) => (
  <Layout className="Layout">
    <Content>{children}</Content>
    <Footer className="Footer">
      ©2020 Code source disponible sur 
      <a
        className="root-footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/dngen049/the-shoppies"
      >
        <GithubOutlined />
        <span className="root-footer-link">Github</span>
      </a>
    </Footer>
  </Layout>
);

export default LayoutView;