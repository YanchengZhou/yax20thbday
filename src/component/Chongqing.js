import React from 'react'
import Navigator from './Navigator';
import { useState } from 'react';

import Bottom from './Bottom'

import 'antd/dist/antd.min.css'
import '../style/basic.css'
import '../style/card.css'
import cake from '../asset/image/cake.png'

import p2 from '../asset/image/2.jpg'

import p21 from '../asset/image/11.JPG'
import p22 from '../asset/image/12.JPG'
import p23 from '../asset/image/13.jpg'
import p24 from '../asset/image/14.JPG'
import p31 from '../asset/image/15.JPG'
import p32 from '../asset/image/16.JPG'
import p33 from '../asset/image/17.JPG'
import p34 from '../asset/image/18.jpg'

import p41 from '../asset/image/51.jpg'
import p42 from '../asset/image/52.jpg'
import p43 from '../asset/image/53.jpg'
import p44 from '../asset/image/54.PNG'

import p51 from '../asset/image/55.PNG'
import p52 from '../asset/image/56.jpg'
import p53 from '../asset/image/58.jpg'
import p54 from '../asset/image/61.JPG'

import p61 from '../asset/image/59.jpg'
import p62 from '../asset/image/60.JPG'
import p63 from '../asset/image/62.jpg'

import { Button, Steps, Row, Card } from 'antd';

const { Step } = Steps;
const steps = [
  {
    title: '',
    content: <>
      <img src={p2} alt="p1" style={{width: '40%'}}></img>
    </>
  },
  {
    title: '合照1',
    content: <>
      <Row className="box-row">
            <Card
              className="box-wrap"
              cover={<img src={p21} alt="picture"/>}
            >
              <h5 className="box-title">出发前</h5>
              <p className="box-text">当时刚结束丽水，虽然和yax还不算熟，但对重庆trip真的很期待（为yax后来的美食选择点赞！），飞机上和cm开始玩隐形守护者，
              开启后续肖途系列回忆</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p22} alt="picture"/>}
            >
              <h5 className="box-title">洪崖洞前 大桥上</h5>
              <p className="box-text">来到第一站洪崖洞美美吃一顿后，走上千厮门大桥，观赏灯亮起后整个城市古典建筑和现代灯光交织起的美，
              记得当时人很多，就这么在桥上和桥边的街上走呀走，边走边聊，最后好不容易找到一个拍照的地方，当时的心比后面的灯光还要明亮</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p23} alt="picture"/>}
            >
              <h5 className="box-title">这是一个视频</h5>
              <p className="box-text">最搞笑的合照，仓促之下拍出了更有人味的照片，每个人都奇奇怪怪哈哈哈。hrt歪头晃脑，zyw扶眼镜，why撩头发，
              zyc在垫脚，cm甚至假笑都没笑出来，yax也呆呆的</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p24} alt="picture"/>}
            >
              <h5 className="box-title">山城步道</h5>
              <p className="box-text">那天下了小雨，几个人走累了坐在边上的椅子上摆烂，向外看城市和街道的景色，配着几个红灯笼，背景是深邃又朦胧，拍了个人照和合照</p>
            </Card>
          </Row>
    </>
  },
  {
    title: '合照2',
    content: <>
        <Row className="box-row">
            <Card
              className="box-wrap"
              cover={<img src={p31} alt="picture"/>}
            >
              <h5 className="box-title">水世界</h5>
              <p className="box-text">zyc差点晕过去，不愿多评价，你们玩得开心诺</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p32} alt="picture"/>}
            >
              <h5 className="box-title">隐秘的角落</h5>
              <p className="box-text">看隐秘的角落已经是两年前，当时被cm hrt推了以后一晚上刷完还历历在目，不知道为什么到重庆才发现cm如此像张东升？
              我喜欢从山谷尽头照进每个角落的光线，更喜欢当时为了摆拍费尽心思的大伙。年轻的心充满想象力，敢爱敢做，为了一个作品不满意重复了好多次才成功哈哈</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p33} alt="picture"/>}
            >
              <h5 className="box-title">武隆的小路</h5>
              <p className="box-text">最爱武隆那条上下起伏的小路，两边被绿草包围，往前也一直望不到尽头，时而开过的小火车，像是在梦境里永远可以走下去。淋着雨浑身湿透也无所谓，感谢yax的相机留下美好的回忆。</p>
            </Card>
            <Card
              className="box-wrap"
              cover={<img src={p34} alt="picture"/>}
            >
              <h5 className="box-title">朦胧美</h5>
              <p className="box-text">拍立得的效果加上那天阴沉湿润的天气，抓住在路上难得碰到的路人，拍下模糊朦胧的照片</p>

            </Card>
          </Row>
    </>,
  },
  {
    title: '时刻1',
    content: <>
    <Row className="box-row">
        <Card
          className="box-wrap"
          cover={<img src={p43} alt="picture"/>}
        >
          <h5 className="box-title">剧本杀</h5>
          <p className="box-text">当时对剧本杀感兴趣到可以顶着白天的疲倦晚上继续彻夜畅玩，记得一共玩了四五个本，yax每次都拿男人很多的女人角色。印象最深的还是冯定邦这个。
          三胞胎太恐怖了，这张是当时6个人都窝在沙发上，害怕的瑟瑟发抖，一直杀到凌晨四点多</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p42} alt="picture"/>}
        >
          <h5 className="box-title">文化街区</h5>
          <p className="box-text">随处可见的街头涂鸦，还有一些文艺的店和小物品，加上少年的你的拍摄点。很喜欢这种在街头漫游乱逛的随意的感觉</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p41} alt="picture"/>}
        >
          <h5 className="box-title">嗑CP</h5>
          <p className="box-text">摆在当时这张图肯定要被嗑死了，奇怪的CP增加了！</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p44} alt="picture"/>}
        >
          <h5 className="box-title">怪叔叔</h5>
          <p className="box-text">在去武陵车上的你画我猜，zyc第一个猜对什么水平，答案如标题</p>
        </Card>
      </Row>
</>,
  },
  {
    title: '时刻2',
    content: <>
    <Row className="box-row">
        <Card
          className="box-wrap"
          cover={<img src={p51} alt="picture"/>}
        >
          <h5 className="box-title">开人</h5>
          <p className="box-text">每次看到之前的朋友圈就会激活一些当时互开的欢乐记忆，一句一个人请对号入座一下</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p52} alt="picture"/>}
        >
          <h5 className="box-title">羊羊</h5>
          <p className="box-text">翻照片除了六人之外出现最多的活物竟然是这只黑羊，看来是有缘。和羊羊合影zyc拍的呆呆的，hrt雨衣肥的像孕妇，yax这张还挺好看</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p53} alt="picture"/>}
        >
          <h5 className="box-title">有光</h5>
          <p className="box-text">我有一个离开住的地方会拍张照的习惯。有光我们来来回回住了两次，很喜欢这个像加州style的地方。记得在这个房间里有cm听卡农泡浴缸，有窗外的江景，
          有晚上一起玩的某个修仙的剧本杀，更有晚上不愿结束的夜谈。（这么小的房间装下6个人哈哈哈）</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p54} alt="picture"/>}
        >
          <h5 className="box-title">摆拍1.0</h5>
          <p className="box-text">成功大合照之前的初尝试，也不错，后面背景很真实，看着真的觉得会掉下去，cm表情很到位，另外两位呆呆的</p>
        </Card>
      </Row>
</>,
  },
  {
    title: '时刻3',
    content: <>
    <Row className="box-row">
        <Card
          className="box-wrap"
          cover={<img src={p61} alt="picture"/>}
        >
          <h5 className="box-title">对拍照片组1</h5>
          <p className="box-text">有两个呆子下山跑的很快，从下面拍我们，然后我们也拍他们，形成一个有意思的套娃对拍</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p62} alt="picture"/>}
        >
          <h5 className="box-title">对拍照片组2</h5>
          <p className="box-text">留住温度 速度 温柔和愤怒，凝住今日怎样好！拍着照片，一路同步，坦白流露，感情和态度！
          好照片太多，先放这么多。</p>
        </Card>
        <Card
          className="box-wrap"
          cover={<img src={p63} alt="picture"/>}
        >
          <h5 className="box-title">合照</h5>
          <p className="box-text">和yax的珍贵合照，再次感谢拍立得。记得拍这张前刚被开，好像是想用手比划到yax头的位置然后比到了脖子</p>
        </Card>
      </Row>
</>,
  }, {
      title: 'yax小作文',
      content: <>
        <h1>重庆—来都来了</h1>
        <p style={{textAlign:'left'}}>手机进水痛失所有照片，手机上重庆之旅的照片全没了，心痛之余才庆幸自己麻烦地背了好几个设备，用拙劣的技术咔嚓了很多照片，也经常拜托朋友们用他们的手机帮我拍拍照，所以除了十分可惜几张很喜欢的照片外，损失倒也没那么惨烈，在这里感谢一直被我麻烦的朋友们和很麻烦的自己。
        不过好在，我不会全靠这照片回忆这趟旅程了，终于可以静下心来回忆，重庆之旅的种种美好故事。
</p>
        <p style={{textAlign:'left'}}>几个拖延症，接近临走前几天才买好机票，好在大家分工明确，订了无敌民宿的全能🐸，研究了完美行程并且对路线熟门熟路的萌萌姐和师傅，提升了整个旅游体验的夜谈二人组，哦，还有那个总是对旅行中“吃”很关注的我。
</p>
        <p style={{textAlign:'left'}}>
        这样的配置，大概无论怎么样都体验不会差，也的确，这六天完美得让人难忘。从第一天在机场打翻的摩卡可可碎片星冰乐开始，这段旅程就注定不平凡。下了飞机在出租车上感受错综复杂的高速、复盘着各个车鸢飞的抉择，在第一家民宿的阳台的小白船旁看着江景荡秋千，在八一小吃街初次体验重庆的辣，对着“王妈手撕烤兔”大笑，被降龙爪爪鸡爪的入口即化折服，吃着串串和钵钵鸡喝着一只酸奶牛和玫瑰冰粉，再加上现炸的香脆的酥肉，用丸子蘸着奶盖、伴点黄豆粉，最后抿几口杯底的清爽茶冻，好不惬意。走在千厮门大桥上看着洪崖洞金光灿烂，找到被拍写真摄影师霸占的看夜景绝佳观赏点，路途泥泞但也值得。满头大汗地挤到人山人海的洪崖洞前，尝试避免人流拍照无果后前排唱着周杰伦的歌，后面两人唱着《不将就》就这样回了民宿。记得那晚被无数次swipe后没喊uno的师傅，也记得凌晨四点快睡觉了被微信“救救我们”的消息惊到，去阳台解救被困住尝试密室逃脱无果的夜谈二人组，然后在房间沙发床上玩着2048等第二天日出。
        </p>
        <p style={{textAlign:'left'}}>
        也记得第二天到有光民宿的震撼，低音的热情民宿老板，整个装修环境让人仿佛置身于加州的阳光中，被绿叶装点满的小花园，有点儿地中海又伴着复古风的室内装修，再加上大窗外躺着就能看见的静谧江景，配上智能的大投屏喝房间设施，每晚的晚安牛奶橙汁和早上丰盛可口的早餐，我真的太爱这个民宿了。（感谢🐸🐸） 
        </p>
        <p style={{textAlign:'left'}}>
        又有着在李子坝梁山鸡用芋头蘸着辣度调和到位的原汤，再吃几口鲜嫩的鸡肉。我记得那天在李子坝地铁站的烈日，那时热得让人发晕，我们站在太阳下等着地铁开进楼里，又进了地铁站，晕头转向地爬了六层楼，心里嚷嚷道“要是有人在这个地铁站赶时间肯定要崩溃”，还早地铁上感受似过山车的崎岖。“如果有一天重庆地铁全停掉做成过山车会怎么样。”尝试过在皇冠大扶梯上拍出一张像样的照片，可无奈一程太快了。也努力地跟随《从你的全世界路过》感受文艺风，却无奈上了天台后被收费打卡点劝退，回头转向冰激凌店尝试花椒味冰激凌和咸蛋黄味冰激凌，还一边讨论着mbti。在山城步道上下着大雨时唱着歌。后来第一次吃重庆火锅，看着火红辣油震撼地在眼前一点点融化，第一个用筷子小小地蘸了一口锅底，那时候辣的后劲猛得令人难忘。一大盘篮子中放着各种菜品，反复拿着无限量的甜点，和🐰拿着“兔兔布丁”“喵喵布丁”，吃辣排位赛就这么开始了——稳坐并列第一吃得最多负责全程吃辣的“老服务员”我和🐰，并列第三的靠椰汁挑战自己上限的“椰奶大王”🐸和萌萌姐，隔十分钟吃一口辣的倒数第二名师傅，和…用脉动和茶水涮了几次菜决定稳守倒一、把火锅店当作馄饨店、靠不辣的抄手填饱肚子的🦉。最惊讶不过在火锅店结账处被🍔和挖芋头喊住。也不会忘记被坑到22:40的两江夜景游轮的那一天，在甲板上讨论着第二天的行程，等着绿光过去抓拍了几百张照片，捏脸般地教大摄影师萌萌姐怎么摆表情才不像假笑。那晚还在“骗人”时被面无表情的大师萌萌姐吓到，所幸和🐰打开投影，想到无处落脚的“鸡窝”默契地大笑，又赞叹着maleficent的美丽，蜷缩在被窝里幸福地看完了电影。

        </p>
        <p style={{textAlign:'left'}}>
        凌晨的有光，城市刚刚苏醒的湖面被灯光点亮，旅行总要有遗憾，就像我一大早满是倦意在烈日下被拖到白象居，看着老居民楼时候的疑惑，又变成后来看照片时候感叹“在这里拍那种复古破旧废墟风格”照片，应该会很完美吧。但只可惜，等到缆车来拍了几张照就走了，成了一个小小的遗憾。在缆车上如蒸笼里感受城市，因🐸大发型师艺术家设计的发型真香。特别喜欢说走就走的欢乐谷/玛雅海滩之旅，i过山车在第一排玩了好几个大型过山车，在大摆锤和跳楼机上俯瞰园区，穿过震耳欲聋的电音曲 ，bu被🦉“谁穿雨衣谁孙子好吧”忽悠后全身湿透了但看着大家落汤鸡模样和跪着谢罪的样子又觉得很有趣。“今晚跪浴缸谢罪好吧”，虽还有没玩到木质过山车的小遗憾，但很快就被水世界的快乐冲淡了。现场买了泳衣后找寻四个“三个高个子，一个稍微矮一点点，都瘦”的人找了半个小时后看见边找鞋子边玩的几个人后的小暴躁，到被坐在水上滑梯时冲下去被水流冲着转的比过山车还甚的刺激与快乐，还有滑道中的大声“对不起”和我们尖叫欢声笑语。最后临近关门前的“双龙轨道”也很令人难忘。
        </p>
        <p style={{textAlign:'left'}}>
        接上文：十二点的全店唯一的鸳鸯锅，让🐸真香的鲜鸭血，不变的排位，还有，满桌的椰汁—每天花在椰汁身上的钱大概有几百吧。误打误撞去了一家像超市的小清吧，随意挑选了几瓶就回到了我爱的有光。
四个小时前往武隆包车的车程上睡睡醒醒，听着ed的歌单、唱着，听着伴点“阴间”的《童话镇”》，看着窗外的云雾缭绕。在天生三桥复刻《隐秘的角落》名场景（夸一下老zds），吹着山上清凉的风，很快走完了全程。在一排仙女山肥肠鱼里选定了一家，鱼鲜美入味，又在山中另一家民宿里度过难忘的一晚—-至今还记得大家jbs推作案细节时的细思极恐不寒而栗，六个人裹着被子在沙发上的紧张气氛至今想起都还有些可怖。
        </p>
        <p style={{textAlign:'left'}}>
        得知两个人可以留下的快乐—-大草原的大雨，穿了外套还是很冷，屡次吓跑🐑的师傅，在公路上阴雨中拍照忘乎所以地不打伞，无家可归似的半路拦截路人帮忙拍阴间照片。这样想来，无论是李子坝那天的烈日，还是公路上的大雨，阴间天气的心情也还是很阳间。在车上互换膨化食品的快乐，回到有光的亲切感，和杨记隆府的不排队的快乐，紧张地尝试霸王兔、吃着在重庆所有吃的里面最辣但又上头到停不下来的辣子鸡，品着毛血旺和孜然羊肉串，再来一点红糖阴米粥，后来再来个麦旋风，重庆吃的真的太好了。外卖了点酒和炸鸡，重庆最后一晚也很快乐。

        </p>
        <p style={{textAlign:'left'}}>
        去看壁画一条街误打误撞到了《少年的你》小北护送陈念上学的路，又复刻几个经典场景。在交通茶馆打uno，城市烟火气息中点了好喝的冰糖菊花茶，看着老人们下象棋。到了钟书阁以为被骗了，却没想到照出来的效果和图上毫无区别，唯一就是人多了一些。废掉的大半卷拍立得胶片，现在看来也成了当时的美好回忆。到最后的洋马儿火锅，像是习惯了辣一样根本离不开。
帮我设计发型选了超牛民宿很会协调砍价很照顾我的全能🐸，每天都在学习着胡教授说话多次说出震撼的话的与我吃辣排位赛并列第一的默契🐰, 不辞辛苦的老摄影师zds但不太会摆表情的萌萌姐，在水世界被拖上去很会说话的师傅，勇于挑战但还是完全不能忽悠我们不穿雨衣的🦉。哦还有，天天喊着kswlkswl的美食研究家我。说了几千次“啊这”的我们。很感谢这群人，让这次旅行如此圆满，旅行很看同行的人，感谢这群有趣的人，也谢谢他们没有嫌弃很麻烦的我。我可以一个人在上海看展，享受《不眠之夜》不用被牵制的一个人上下探索的感觉，但我终究还是喜欢和朋友一起。
        </p>
      </>
  }
];

function Chongqing(props) {
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

export default Chongqing