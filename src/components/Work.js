import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import WorkCardLeft from './WorkCardLeft';
import WorkCardRight from './WorkCardRight';
import data from '../projects.json';


class Work extends Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Container id="work-container" fluid>
            {
                data.projects.map((project, index) => (                    
                    index%2==0?<WorkCardLeft name={project.name} 
                                  image={project.image} 
                                  link={project.link} 
                                  description={project.description}/>:
                                  <WorkCardRight name={project.name} 
                                  image={project.image} 
                                  link={project.link} 
                                  description={project.description}/>


            ))}
            </Container>
        );
    }
}

export default Work;
