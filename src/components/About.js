import React, {Component} from 'react';
import {Row, Col, Container, CardDeck} from 'react-bootstrap';
import '../App.css';
import pic from '../images/pic.JPG';
// import data from '../projects.json';
import SkillCard from './SkillCard';
import {ReactComponent as AndroidLogo} from '../images/android_icon.svg';
import {ReactComponent as DevLogo} from '../images/dev_icon.svg';
import {ReactComponent as DatabaseLogo} from '../images/database_icon.svg';
import {ReactComponent as HtmlLogo} from '../images/html_icon.svg';
import {ReactComponent as PencilLogo} from '../images/pencil_icon.svg';
import {ReactComponent as ToolsLogo} from '../images/tools_icon.svg';
import {ReactComponent as LinkedIn} from '../images/linkedin.svg';
import {ReactComponent as Mail} from '../images/email.svg';
import {ReactComponent as Github} from '../images/giithub.svg';
import {ReactComponent as Vsco} from '../images/vsco.svg';
import {ReactComponent as Flag} from '../images/flag.svg';



class About extends Component{
    
    render()
    {
        return(
            <Container fluid >   
                <Row>
                    <Container className="intro-container" fluid>
                        <Row> 
                            <Col xs={12} md={5} className="about-info">                                                        
                                <p className="light">                                                                         
                                   <h1 className="light">Hi!<br/> </h1>  I am a graduate student at the University of Southern California at Los Angeles, 
                                    pursuing MS in Computer Science and will be graduating in May 2021. <br/> <br/>
                                    As a full stack developer, I have worked on web development projects with popular 
                                    frameworks and libraries such as Angular, React and Node. This portfolio was designed using Figma and developed using React. I also have experience with Android app development.
                                    <br/><br/>
                                    I love to work on projects with a social cause. <a href="http://www.frontidarecords.org" target="_blank" rel="noopener noreferrer">Frontida Records</a> is my most recent such project. <br/><br/>
                                    I am also a massive Formula 1 fan. Team Ricciardo!<Flag id="flag" />
                                </p>
                            </Col>
                            <Col xs={1} md={1}>

                            </Col>                                                                   
                            <Col xs={12} md={4} className="picture" >                               
                                <Row style={{ textAlign: "center", justifyContent: "center"}}>                                   
                                    <img class="profile" src={pic} alt="profile"></img>                                                      
                                </Row> 
                                <Row style={{ textAlign: "center", justifyContent: "center"}}>
                                    <p className="light"><h1 className="light">Likhita Suresh</h1>                              
                                    MS in CS<br/>
                                    University of Southern California
                                    </p>
                                </Row>
                                <Row className="icons">   
                                    <Col xs={4} className="right">
                                        <a href="https://www.linkedin.com/in/likhita-suresh/" target="_blank" rel="noopener noreferrer"><LinkedIn className="social-icons" /></a>                           
                                    </Col>                         
                                    <Col xs={2}>                                         
                                        <a href="mailto: likhitasuresh@gmail.com" target="_blank" rel="noopener noreferrer"><Mail className="social-icons"/> </a>                                                                   
                                    </Col>
                                    <Col xs={1}>   
                                    <a href="https://github.com/likhitasuresh" target="_blank" rel="noopener noreferrer"><Github className="social-icons"/></a>                                                                                                             
                                    </Col>    
                                    <Col xs={3}>
                                        <a href="https://vsco.com/likhitasuresh" target="_blank" rel="noopener noreferrer"><Vsco className="social-icons" /></a>                                                                                                             
                                    </Col>                           
                                </Row>                                                                
                            </Col>
                            
                            
                        </Row>
                        
                    </Container>
                    
                </Row> 
                <Row>
                    <Container id="skills-container" fluid > 
                        <div>
                            <h1 className="dark center header" style={{ paddingBottom: "5%", paddingTop: "5%"}}>My Skills</h1> 
                        </div>
                        
                        <CardDeck>
                            <SkillCard skillTitle="Web Development" 
                                           skillList="React, Angular9, Node.js, PHP, Flask" 
                                           image={HtmlLogo} >                                        
                            </SkillCard>
                            <SkillCard skillTitle="Database Management" 
                                           skillList="MySQL, SQLite, Airtable" 
                                           image={DatabaseLogo} >
                             </SkillCard> 
                             <SkillCard skillTitle="Tools and Frameworks" 
                                           skillList="GCP, AWS, VMware, WordPress, Github, GitLab, Maya" 
                                           image={PencilLogo} > 
                            </SkillCard>
                        </CardDeck> 
                        <CardDeck style={{ marginTop: "3%"}}>                            
                            <SkillCard skillTitle="Programming Languages" 
                                           skillList="Java, Python, C++" 
                                           image={DevLogo} > 
                            </SkillCard>
                            <SkillCard skillTitle="Mobile App Development" 
                                           skillList="Android with Java" 
                                           image={AndroidLogo} > 
                            </SkillCard>
                            <SkillCard skillTitle="UI/UX Design" 
                                       skillList="Figma, Paint3D, Adobe Xd" 
                                       image={ToolsLogo} > 
                            </SkillCard>
                        </CardDeck>  
                                           
                        {/* <Row className="justify-content-md-center">
                            <Col xs={12} md={5} >                                
                                <SkillCard skillTitle="Web Development" 
                                           skillList="React, Angular9, Node.js, PHP, Flask" 
                                           image={HtmlLogo} >
                                        
                                </SkillCard>
                            </Col>
                            <Col xs={12} md={5}>
                                <SkillCard skillTitle="Database Management" 
                                           skillList="MySQL, SQLite, Airtable" 
                                           image={DatabaseLogo} > </SkillCard>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={5}>
                                <SkillCard skillTitle="Tools and Frameworks" 
                                           skillList="GCP, AWS, VMware, WordPress, Github, GitLab, Maya" 
                                           image={PencilLogo} > </SkillCard>
                            </Col>
                            <Col xs={12} md={5}>
                                <SkillCard skillTitle="Programming Languages" 
                                           skillList="Java, Python, C++" 
                                           image={DevLogo} > </SkillCard>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={5}>
                                <SkillCard skillTitle="Mobile App Development" 
                                           skillList="Android with Java" 
                                           image={AndroidLogo} > </SkillCard>
                            </Col>
                            <Col xs={12} md={5}>
                            <SkillCard skillTitle="UI/UX Design" 
                                       skillList="Figma, Paint3D, Adobe Xd" 
                                       image={ToolsLogo} > </SkillCard>
                            </Col>
                        </Row> */}
                    </Container>
                    
                </Row>        
                
            </Container>
        );
    }
}

export default About;