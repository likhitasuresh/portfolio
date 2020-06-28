import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import WorkCardLeft from './WorkCardLeft';
import WorkCardRight from './WorkCardRight';
import data from '../projects.json';
import MediaQuery from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';


class Work extends Component{

    
    render() 
    {
        return(
            <>
                                     
            <MediaQuery query="(max-width: 600px)">
                <Container id="work-container" fluid>
                <div style={{paddingTop: "15%"}}> 
                <h1 className="dark center header" >My Work</h1>
                <p className="dark center">Here are some of my technical projects present, and past.</p>
            </div>
                {
                    data.projects.map((project, index) => (                                       
                        <WorkCardLeft name={project.name} 
                                    image={project.image} 
                                    link={project.link} 
                                    description={project.description}                                    
                                    period={project.period}/>    
                                    
                ))}      
                {console.log(data)}              
                </Container>
            </MediaQuery>
            <MediaQuery query="(min-width: 601px)">                
                    <Container id="work-container" fluid>
                    <div style={{paddingTop: "5%"}}>
                        <h1 className="dark center header" >My Work</h1>
                        <p className="dark center">Here are some of my technical projects present, and past.</p>
                    </div>
            {
                data.projects.map((project, index) => (                    
                    index%2===0?                                         
                    <ScrollAnimation animateIn="fadeIn">
                           <WorkCardLeft name={project.name} 
                                  image={project.image} 
                                  link={project.link} 
                                  description={project.description}
                                  period={project.period}/>         
                    </ScrollAnimation>                                                    
                    :
                    <ScrollAnimation animateIn="fadeIn">
                        <WorkCardRight name={project.name} 
                                  image={project.image} 
                                  link={project.link} 
                                  description={project.description}
                                  period={project.period}/>
                    </ScrollAnimation>
                                  


            ))}
                
            </Container>
            </MediaQuery>
           </> 
        );
    }
}

export default Work;
