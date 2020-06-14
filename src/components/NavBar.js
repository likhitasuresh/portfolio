import React, { Component } from "react";
import { NavLink, withRouter} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import  './navbar.css';

class NavBar extends Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <>
                <Navbar className="color-nav" scrolling light expand="md" sticky="top" variant="dark" bg='dark'> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">                                                   
                            <Nav className="ml-auto">                                  
                                <Nav.Link as={NavLink} to={`/`} exact={true}>About</Nav.Link>
                                <Nav.Link as={NavLink} to={`/work`}>Work</Nav.Link>
                                <Nav.Link as={NavLink} to={`/contact`}>Contact</Nav.Link>                            
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default withRouter(NavBar);