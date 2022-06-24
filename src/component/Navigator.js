import React from 'react'
import { useState } from 'react';

import { Layout, Menu } from 'antd';
const { Header } = Layout;


function Navigator(props) {
  const onChange = props.onChange

  return (
    <>
    <Layout>
      <Header className="header navigator">
        <Menu className="navigator" theme="dark" mode="horizontal" defaultSelectedKeys={["Home"]} items={[{key: "Home", label: "Home"}]} 
          onClick={onChange}/>
      </Header>
    </Layout>
    </>
  )
}

export default Navigator