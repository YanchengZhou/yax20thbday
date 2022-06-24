import React from 'react'
import Navigator from './Navigator';
import { useState } from 'react';

import 'antd/dist/antd.min.css'
import '../style/basic.css'
import '../style/card.css'
import cake from '../asset/image/cake.png'

import p1 from '../asset/image/1.JPG'
import p21 from '../asset/image/21.JPG'
import p22 from '../asset/image/22.JPG'
import p23 from '../asset/image/23.JPG'
import p24 from '../asset/image/24.JPG'
import p31 from '../asset/image/31.jpg'
import p32 from '../asset/image/32.JPG'
import p33 from '../asset/image/33.JPG'
import p34 from '../asset/image/34.JPG'
import p35 from '../asset/image/35.JPG'
import p41 from '../asset/image/41.JPG'
import p42 from '../asset/image/42.JPG'
import p43 from '../asset/image/43.JPG'
import p44 from '../asset/image/44.JPG'

import { Button, Steps, Row, Card } from 'antd';

const { Step } = Steps;
const steps = [
  {
    title: '',
    content: <>
      <img src={p1} alt="p1" style={{width: '40%'}}></img>
    </>
  },
  {
    title: '一些时刻',
    content: <>
      <Row className="box-row">
            <Card
              className="card-wrap"
              cover={<img src={p31} alt="picture"/>}
            >
              <h5 className="box-title">远古时期</h5>
              <p className="box-text">yax二刷，zyc一刷，yax和hrt拿了A进去，剩下zyc和他的3</p>
            </Card>
            <Card
              className="card-wrap"
              cover={<img src={p32} alt="picture"/>}
            >
              <h5 className="box-title">卡司</h5>
              <p className="box-text">对卡司非常执着和细致的研究，天天关注，可惜NY版没法看卡司了</p>
            </Card>
            <Card
              className="card-wrap"
              cover={<img src={p33} alt="picture"/>}
            >
              <h5 className="box-title">黑屋+签名</h5>
              <p className="box-text">看到Agnes署名的物件，yax n次解锁黑屋之一，还记得当时蹲在门口等演员出来要签名</p>
            </Card>
            <Card
              className="card-wrap"
              cover={<img src={p34} alt="picture"/>}
            >
              <h5 className="box-title">30天挑战</h5>
              <p className="box-text">早期SNM活动，记得当时交流了很多深刻感悟，坚持下来了哈哈，成为SNM专家重要因素之一</p>
            </Card>
            <Card
              className="card-wrap"
              cover={<img src={p35} alt="picture"/>}
            >
              <h5 className="box-title">yax起飞记录</h5>
              <p className="box-text">2次5黑屋永远是巅峰水平，早期yax首次取得重大突破</p>
            </Card>
          </Row>
    </>
  },
  {
    title: '艺术作品',
    content: <>
        <Row className="box-row">
            <Card
              className="box-wrap"
              cover={<img src={p24} alt="picture"/>}
            >
              <h5 className="box-title">一些艺术作品</h5>
              <p className="box-text">艺术人就是牛</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p22} alt="picture"/>}
            >
              <h5 className="box-title">吻</h5>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p23} alt="picture"/>}
            >
              <h5 className="box-title">标本室</h5>
              <p className="box-text">画得太好看，Taxi爱中带恨，zyc不愿多说</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p21} alt="picture"/>}
            >
              <h5 className="box-title">SNM灵感的设计</h5>
            </Card>
          </Row>
    </>,
  },
  {
    title: '追星现场',
    content: <>
    <Row className="box-row">
        <Card
          className="box-wrap"
          cover={<img src={p43} alt="picture"/>}
        >
          <h5 className="box-title">高老师</h5>
          <p className="box-text">高老师还是帅</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p42} alt="picture"/>}
        >
          <h5 className="box-title">依然是高老师</h5>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p41} alt="picture"/>}
        >
          <h5 className="box-title">SNM大眼男担当</h5>
          <p className="box-text">LHC！！！</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p44} alt="picture"/>}
        >
          <h5 className="box-title">画里更帅</h5>
        </Card>
      </Row>
</>,
  },
];

function SleepNoMore(props) {
  const onChange = props.onChange

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  return (
    <>
        <div className="container">
        
        <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={<img style={{width: '50%'}} src={cake} alt="cake"></img>} />
        ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action">
        {current > 0 && (
          <Button
            className="buttonLeft"
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" className="buttonRight" onClick={() => next()}>
            Next
          </Button>
        )}
        <br/>
        {current === steps.length - 1 && (
          <Button type="primary" className="buttonRight" onClick={onChange}>
            Home
          </Button>
        )}
        <br/>
      </div>
        </div>
    </>
  )
}

export default SleepNoMore