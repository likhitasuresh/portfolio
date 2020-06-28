import React, { Component } from "react";
import {ReactComponent as Copyright} from '../images/copyright.svg';
import {ReactComponent as Logo} from '../images/Logo.svg';
import {Container} from 'react-bootstrap';

import '../App.css';

class BottomBar extends Component{
    render()
    {
        return(
            <Container className="bottom" fluid>
                <Logo style={{ float: "right", paddingLeft: "1%"}}/>
                <p className="light">Likhita Suresh<br/>2020<Copyright className="copyright"/></p>
            </Container>
        )
    }
}

export default BottomBar;