import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

class WorkCardRight extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Container className="container-project">
                <Row>                    
                    <Col className="description my-auto">
                        <h1 className="italic">{this.props.name}</h1>
                        <p className="des">{this.props.description}</p>
                        <a href={this.props.link} class="btn btn-primary" target="_blank" rel="noopener noreferrer">More</a>
                    </Col>
                    <Col className="ss-container">
                        <img src={this.props.image} alt="project preview image" className="screenshot"></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WorkCardRight;