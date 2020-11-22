import './App.css';
import React from "react";
import { Layout } from "antd";
import Card from './components/Card';
import Link from './elements/Link';

const { Header, Content} = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ background: '#3289a8', padding:'40px', marginBottom:'10px' }}>
         <div className="logo" style={{float: "left", marginLeft:'15px', fontSize:"1.3rem", color: "white" }}>Kelompok 19</div>
         <div style={{float: "right"}}>
           <Link href="https://www.w3schools.com">Links</Link>
           <Link href="https://www.w3schools.com">Links</Link>
         </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="Components">
            <Card bgcolor="#ededed" />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
