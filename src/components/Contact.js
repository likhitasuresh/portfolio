import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

class Contact extends Component{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <form method="post" action="#">                
                <Container className="container-contact" fluid>
                    <Row>
                        <span style={{ marginLeft: "auto"}}><h1 >Contact Likhita</h1> </span>
                    </Row>                    
                    <Row className="c-row" >                    
                        <input type="text" name="name" id="name" placeholder="Name" className="contact" required/>                                                                                               
                    </Row>
                    <Row className="c-row">                        
                        <input type="email" name="email" id="email" placeholder="Email" className="contact" required/>                                                                                                                            
                    </Row>                    
                    <Row className="c-row">                        
                        <textarea name="message" id="message" rows="5" placeholder="Message" className="contact" required/>                                                                                                                              
                    </Row>
                    <Row className="c-row">                    
                        <button type="submit" className="contact">Send</button>                        
                    </Row>
                </Container>
                
                
                
                
                
            </form>
        );
    }
}

export default Contact;