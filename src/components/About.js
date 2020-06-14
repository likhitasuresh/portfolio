import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../App.css';
import pic from '../images/my.jpg';
import linkedin from '../images/linkedin.PNG';
import mail from '../images/mail.PNG';
import github from '../images/github.PNG';
import languages from '../images/languages.PNG';
import web from '../images/web.PNG';
import mad from '../images/mad.PNG';
import sql from '../images/sql.PNG';
import tools from '../images/tools.PNG';

class About extends Component{
    constructor(props)
    {
        super(props);    
    }
    render()
    {
        return(
            <Container fluid>   
                <Row style={{ height: "90vh"}}>
                    <Container className="intro-container" fluid>
                        <Row >
                        <Col xs={4}>   
                            <Row>                            
                                <img class="profile" src={pic} alt="profile"></img>                                                        
                            </Row> 
                            <Row className="icons">   
                                <Col xs={1}>
                                    
                                </Col>                         
                                <Col>
                                    <a href="https://www.linkedin.com/in/likhita-suresh/" target="_blank" rel="noopener noreferrer"><img class="icon" src={linkedin} alt="profile"></img></a>                           
                                    <a href="mailto: likhitasuresh@gmail.com" target="_blank" rel="noopener noreferrer"><img class="icon mail" src={mail} alt="profile"></img> </a>                           
                                    <a href="https://github.com/likhitasuresh" target="_blank" rel="noopener noreferrer"><img class="icon mail" src={github} alt="profile"></img></a>                                                                            
                                </Col>
                                <Col xs={1}>                                    
                                </Col>                               
                            </Row>                                                                
                        </Col>
                        <Col xs={4} className="about-info">                        
                            <h1>Hi.</h1>    
                            <p>                  
                                I am Likhita.<br/>                       
                                I am a full stack developer, currently exploring the area of visual aesthetics. <br/>                                           
                                I study MS CS at University of Southern California, graduating in Spring 2021. 
                            </p>
                        </Col>
                        
                        </Row>
                        
                    </Container>
                    
                </Row> 
                <Row>
                    <Container id="skills-container" fluid>
                        <Row className="header" xs={5}>
                            <h1 className="light">
                                My Skills
                            </h1>   
                        </Row>                    
                        <Row className="row1">
                            <Col>
                                <Row className="title">
                                    <Col className="skills logo">
                                        <img src={web} alt="web development"></img>
                                    </Col>
                                    <Col className="skills">
                                        Web Development
                                    </Col>
                                </Row>
                                <Row className="skills title list">
                                    React, Angular9, Node.js, Flask, PHP
                                </Row>
                            </Col>  
                            <Col>
                                <Row className="title">
                                    <Col className="skills logo">
                                        <img src={sql} alt="database management"></img>
                                    </Col>
                                    <Col className="skills">
                                        Database Management
                                    </Col>
                                </Row>
                                <Row className="skills title list">
                                    MySQL, SQLite, MongoDB, Airtable, Firebase
                                </Row>
                            </Col>  
                            <Col>
                                <Row className="title">
                                    <Col className="skills logo">
                                        <img src={tools} alt="tools and frameworks"></img>
                                    </Col>
                                    <Col className="skills">
                                       Tools and Frameworks
                                    </Col>
                                </Row>
                                <Row className="skills title list">
                                    VMware, WordPress, AWS, GCP, Figma, GitHub, GitLab
                                </Row>
                            </Col>  

                        </Row>
                        <Row className="row1">
                        <Col>
                            <Row className="title">
                                <Col className="skills logo">
                                    <img src={languages} alt="languages"></img>
                                </Col>
                                <Col className="skills">
                                    Programming Languages
                                </Col>
                            </Row>
                            <Row className="skills title list2">
                                Java, Python, C++, C
                            </Row>
                        </Col>  
                        <Col>
                            <Row className="title">
                                <Col className="skills logo">
                                    <img src={mad} alt="mobile app development"></img>
                                </Col>
                                <Col className="skills">
                                    Mobile App Development
                                </Col>
                            </Row>
                            <Row className="skills title list2">
                                Android with Java
                            </Row>
                        </Col>  
                            
                        </Row>
                    </Container>
                    
                </Row>        
                
            </Container>
        );
    }
}

export default About;