import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import BottomBar from './components/BottomBar';
import ScrollToTop from './components/ScrollToTop';


class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      background: "http://lsuresh.freevar.com/portfolio_images/hills.JPG",
    }
  }

  changeBackground(url)
  {
    this.setState(
      {
        background: url
      }
    );
  }
  render()
  {
    return (
      <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <NavBar />                     
          <div id='page-body'>           
                <Switch>                                                   
                    <Route path="/work" component={Work} exact/>
                    <Route path="/contact" component={Contact} exact/>  
                    <Route path="/" component={About} exact/>
                    {/* <Route path="/search/:query" component={SearchResults} exact />                      
                    <Route path="/:source/:field"  component={Home} exact />    
                    <Route path='/' component={ErrorFile} /> */}
                </Switch>                                              
          </div>  
          <BottomBar />           
        </div>
        </ScrollToTop> 
      </BrowserRouter>
      
    );
  }
}
export default App;
