import React, { Component } from "react";
import {Row, Col, Card} from 'react-bootstrap';
import '../App.css';

class SkillCard extends Component{

    
    render()
    {
        return(            
            <Card>
                <Card.Body className="skillCard">
                    <Card.Title>
                        <Row>
                            <Col xs={2} md={3}>
                                {this.props.image.render()}                             
                            </Col>
                            <Col xs={10} md={9}>
                                <h1 className="light">{this.props.skillTitle}</h1>                            
                            </Col>
                        </Row>
                            
                        </Card.Title>
                    <Card.Text >
                        <p className="light">{this.props.skillList}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    
}

export default SkillCard;