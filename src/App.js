import './App.css';
import Navigator from './component/Navigator'
import { useState } from 'react';
import Bottom from './component/Bottom';
import { Button, PageHeader, Card, Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css'

import './style/basic.css'

import intro1 from './asset/image/intro1.jpg'
import intro2 from './asset/image/intro2.jpg'
import SleepNoMore from './component/SleepNoMore';
import Chongqing from './component/Chongqing';

const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [status, setStatus] = useState(0)

  const goBack = () => {
    setStatus(0)
  }

  return (
    <>
      <Navigator onChange={goBack}></Navigator>
      { status === 0 && <div className="container">
        <PageHeader title="下方有两段回忆，点击图片开启"/>
        <img src={intro1} alt="intro1" className="intro-pic" onClick={()=>setStatus(1)}></img>
        <br/>
        <img src={intro2} alt="intro2" className="intro-pic" onClick={()=>setStatus(2)}></img>
        <br/>
      </div>}
      { status === 1 && <SleepNoMore onChange={goBack}></SleepNoMore>}
      { status === 2 && <Chongqing onChange={goBack}></Chongqing>}
      <Bottom></Bottom>
    </>
  );
}

export default App;
