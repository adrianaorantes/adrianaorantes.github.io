import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
import { Card } from 'antd';
import { red } from '@material-ui/core/colors';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const microsoft_img = require("./img/microsoft_logo.png");
const dynasty_img = require("./img/Dynasty_logo.jpg");
const neighborhood_img = require("./img/neighborhood.png");
const selfie = require("./img/meNyc.JPG");



//<HeartOutlined />
function App() {

  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const handleOk1 = () => {
    setIsModalVisible1(false);
  };
  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const handleOk2 = () => {
    setIsModalVisible2(false);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const showModal3 = () => {
    setIsModalVisible3(true);
  };
  const handleOk3 = () => {
    setIsModalVisible3(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };
  return (
    <div>
    <Layout className="layout Background_color">
      <Header className="Background_color" style={{ padding: '0 50px' }}>
  
        <Breadcrumb style={{ float: 'right', margin: '16px 0' } }>
          <Breadcrumb.Item href="#aboutme">About Me</Breadcrumb.Item>
          <Breadcrumb.Item href="#projects">Projects</Breadcrumb.Item>
          <Breadcrumb.Item href="#experience">Experience</Breadcrumb.Item>
          <Breadcrumb.Item>Welcome</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <br></br><br></br><br></br><br></br>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content ">
        <Row  style={{padding: 40}}></Row>
      <Row gutter={[0, 20]} className="Header_text">hey! 👋 </Row>
    <Row gutter={[50, 40]}>
      
      <Col className="Medium_text" span={13}>I’m Adriana Orantes.
        I enjoy user interaction design and am currently studying Computer Science at Columbia University. 
        <br></br><span style={{color: '#EE6C4D'}}><b> Designing</b> </span>to make people 
        <span style={{color: '#3D5A80'}}><b> happy</b></span> is my <span style={{color: '#52B788'}}
        ><b>passion</b></span>. 
      </Col> 
      <Col className="skills">

        
        <a href="https://github.com/adrianaorantes"> <u>github</u> </a>  / 
        <a href="mailto:ao2732@columbia.edu"> <u>email</u> </a> / 
        <a href="https://docs.google.com/document/d/17Cjq7aor8-oPyCIr6iJ2-UZIiB9cI7DJ0nyLStIMndU/edit?usp=sharing"> <u>resume</u> </a>
        
      <p>python • java • react • typescript • redux • html • css • figma • design • git</p>
   
      </Col>
    </Row>


      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Row style={{padding: 40}}></Row>
      <a id="experience">
      <Row style={{padding: 10}} className="Title_font" >
        Experience
      </Row>
      </a>
      <br></br>
      <div>
    <Row style={{padding: 10}}>

     <Col className="Exp_cards" span={8}>
        <Card hoverable onClick={showModal1}
        style={{ width: 240 }}
        cover={<img alt="Microsoft Logo" src={microsoft_img}/>}>
        <Meta title="Explore (SWE/PM) Intern" description="Summer 2021" />
        </Card>
        <Modal title="Explore (SWE/PM) Intern" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}
        footer={[]}>
        <p>This past summer, I worked as an Explore Intern at Microsoft. I was on the 
          Provisioning team under
           M365. </p><p> Explore is a 12 week internship where interns work with two other podmates and
           experience both the PM and SWE roles.</p>
        <p>Our project was to create an internal dashboard for the Provisioning team that 
           displayed the tenant lifecycle, allowing the team to visualize tenant data and gain important insights from the data.
        </p>
        <p>Skills learned and/or improved on: Data Visualization, Team Working, Networking, Communication, Backend, Frontend</p>
        <p>The techonologies used were C#, Power Bi, and Scope Script. </p>
      </Modal>
      </Col>

      <Col className="Exp_cards" span={8}>
        <Card hoverable onClick={showModal2}
        style={{ width: 240 }}
        cover={<img alt="Microsoft Logo" src={microsoft_img}/>}>
        <Meta title="New Technologist Intern" description="Summer 2020" />
        </Card>
        <Modal title="New Technologist Intern" visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}
        footer={[]}>
        <p>Summer 2019, I worked at Microsoft as a New Technologist intern. </p>
        <p>I worked in a team of 4 to create a web application that tracked clean water locations in the user's area. </p>
        <p>This internship was my first experience going through the entire product lifecycle and working on a team outside of a 
          hackathon. I learned invaluable skills such as communication skills and how to go about the planning process of a product. I met
          mentors who guided me throughout the process and supported me as it was my first time using Typescript, React, and Redux. 
        </p>
        <p>Skills learned and/or improved on: Frontend, API, Design, Databases, Teamworking, Networking, Communication</p>
        <p>The techonologies used were Typescript, React, HTML, CSS, Redux, and Figma. </p>
      </Modal>
      </Col>
      
      <Col className="Exp_cards" span={8}>
        <Card hoverable onClick={showModal3}
        style={{ width: 240 }}
        cover={<img alt="Dynasty George Logo" src={dynasty_img}/>}>
        <Meta title="Design+Research Intern" description="Spring 2020" />
        </Card>
        <Modal title="Design and Research Intern" visible={isModalVisible3} onOk={handleOk3} onCancel={handleCancel3}
        footer={[]}>
        <p>The spring semester of my freshman year of college, I completed my first college internship at a
          sustainable fashion startup called Dynasty George. During this internship, I researched sustainable mediums 
          for hang tags and banners and wrote a research paper to present to Dynasty. I later used my research to 
          design hang tags and banners that represented the values of the brand.
        </p>
        <p>Being my first internship, I learned so much in a span of a few months. Working firsthand with the founder 
          of the startup, Dynasty, I was able to hear about her experiences and her story. Researching sustainable mediums and presenting my work to Dynasty allowed
          me to build up on my presentation skills and research skills, and creating the designs for the banners was one of my 
          first experiences that introduced me to my passion for designing. 
        </p>
        <p>Skills learned and/or improved on: Design, Research, Networking, Business, Sustainable Fashion</p>
        <p>The technology used was Adobe XD.</p>
      </Modal>
      </Col>

    </Row>
 
  </div>
  <Row style={{padding: 10}} >
    <br></br>
  </Row> 
  <Row>

  </Row> <br></br><br></br><br></br><br></br><br></br><br></br>
  <a id="projects">
  <Row style={{padding: 10}} className="Project_font" >
        Projects
  </Row><br></br>
  </a>
  <Col  span={10}>
    <a href="https://github.com/adrianaorantes/neighborhood-app/blob/main/README.md">
    <Card hoverable title="neighborhood" style={{ width: 300 }}>
      <img style={{ width: 250 }}alt="Neighborhood logo" src={neighborhood_img}/>
      <p style={{padding: 10}}className="Project_desc"> 
      <u>Link to Project on Github!</u></p>   
    </Card>
    </a>
  </Col>

  <br></br><br></br><br></br><br></br><br></br><br></br>

  <Row style={{padding: 10}}  className="Project_font" >
        About Me  <SmileTwoTone style={{margin:7}}/>
      </Row>
      <br></br>
      <a id="aboutme">
  <Row gutter={[50, 40]}>
      <br></br>
      <Col span={9}>
      <img className="selfie" style={{ width: 450, margin:-10 }} alt="Photo of Me in Times Square, NYC" src={selfie}/>
      </Col>
      <Col span={15}>
      <p>Going to college I had little to no idea about what the tech world was like, so I began my first  
        semester at Columbia University's School of Engineering with lots of questions. It wasn't until I was selected to participate in a program at my university 
        called JADE that I was able to build my first website, visit various tech companies across New York City, and learn
        about the different possibilites my future could hold.
      </p>
      <p>After JADE, I found that I had really enjoyed front-end development and design. Excited about the future, I applied to the New Technologists
      internship at Microsoft. That summer, I learned so much about frontend, backend, design, and product management. It was a life-changing experience
      and I was able to meet amazing mentors and friends. The following summer I returned to Microsoft as an Explore Intern where I was able
      to learn more about data visualization and backend languages on the Experiences and Devices team.
      </p>
      <p>I am a first generation Salvadoran-American living in New York. Some of my favorite activities include hiking,
        dog-sitting, and eating icecream! <HeartTwoTone twoToneColor="#eb2f96" />
      </p>
      <p>I am currently looking for SWE and/or Design roles for the summer of 2022! If you have any questions, feel free to contact
        me at ao2732@columbia.edu! Thanks :)
      </p>
      </Col>
    
  </Row>
  </a>
  <br></br><br></br> <br></br><br></br><br></br><br></br><br></br>
  <footer><p style={{padding: 10}}>Made by Adriana <HeartOutlined /></p></footer>
    </Content>
    </Layout>
    
    </div>

  );
}

export default App;


