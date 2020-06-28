import React, { Component } from "react";
import {Row, Col, Card} from 'react-bootstrap';
import '../App.css';

class WorkCardRight extends Component{
    
    render()
    {
        return(
            // <Container className="container-project">
            //     <Row>                    
            //         <Col className="description my-auto" xs={12} md={6} lg={6}>
            //             <h1 className="light">{this.props.name}</h1>
            //             <p className="light">{this.props.description}</p>
            //             <a href={this.props.link} class="btn btn-more" target="_blank" rel="noopener noreferrer">More</a>
            //         </Col>
            //         <Col className="ss-container" xs={12} md={6} lg={6}>
            //             <img src={this.props.image} alt="project preview" className="screenshot"></img>
            //         </Col>
            //     </Row>
            // </Container>
            <Card className="container-project w3-animate-opacity">
                <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                </div>
                <Row>                     
                     <Col className="my-auto" xs={12} md={6} lg={6}>
                         <Card.Title><h1 className="light">{this.props.name}</h1></Card.Title>
                         <Card.Text><p className="light">{this.props.description}</p>
                         <p className="light">{this.props.period}                         
                         </p>
                         <a href={this.props.link} className="btn btn-more" target="_blank" rel="noopener noreferrer">More</a>
                         </Card.Text>                         
                     </Col> 
                     <Col className="ss-container" xs={12} md={6} lg={6}>
                         <img src={this.props.image} alt="project preview" className="screenshot"></img>                        
                     </Col>
                 </Row>
            </Card>
        );
    }
}

export default WorkCardRight;