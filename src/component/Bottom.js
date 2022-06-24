import React from 'react'
import { useState } from 'react';

import { Layout } from 'antd';
const { Footer } = Layout;

function Bottom() {
  return (
    <>
        <Layout>
            <Footer
            style={{
            textAlign: 'center',
            }}
            >
            Happy Birthday to 易安心!!!
        </Footer>
      </Layout>
    </>
  )
}

export default Bottom