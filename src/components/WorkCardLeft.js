import React, { Component } from "react";
import {Row, Col, Card} from 'react-bootstrap';
import '../App.css';

class WorkCardLeft extends Component{
    
    render()
    {
        return(            
            <Card className="container-project w3-animate-opacity">
                <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                </div>
                <Row>
                     <Col xs={12} md={6} lg={6}>
                         <img src={this.props.image} alt="project preview" className="screenshot"></img>                        
                     </Col>
                     <Col className="my-auto" xs={12} md={6} lg={6}>
                         <Card.Title><h1 className="light">{this.props.name}</h1></Card.Title>
                         <Card.Text><p className="light">{this.props.description}</p>
                         <p className="light">{this.props.period}                         
                         </p>
                         {console.log(this.props.period)}
                         <a href={this.props.link} className="btn btn-more" target="_blank" rel="noopener noreferrer">More</a>
                         </Card.Text>
                         
                     </Col> 
                 </Row>
            </Card>
        );
    }
}

export default WorkCardLeft;