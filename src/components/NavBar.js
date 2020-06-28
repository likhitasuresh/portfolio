import React, { Component } from "react";
import { NavLink, withRouter} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import '../App.css';

class NavBar extends Component{
    
    constructor(props)
    {
        super(props);                
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }        
    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }
    
    closeNavbar() {
        if (this.state.collapsed !== true) {
        this.toggleNavbar();
        }
    }  
    
    render()
    {        
        return(
            <>
                <Navbar 
                className="color-nav" expand="md" sticky="top" variant="dark" > 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggleNavbar} />
                        <Navbar.Collapse id="basic-navbar-nav" isOpen={!this.state.collapsed}>                                                   
                            <Nav className="ml-auto" >                                  
                                <Nav.Link as={NavLink} to={`/`} exact={true} onClick={this.closeNavbar}>About</Nav.Link>
                                <Nav.Link as={NavLink} to={`/work`} >Work</Nav.Link>
                                <Nav.Link as={NavLink} to={`/contact`} >Contact</Nav.Link>                            
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default withRouter(NavBar);