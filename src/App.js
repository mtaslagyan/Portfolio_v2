import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import HtmlAndCss from './Components/HtmlAndCss/HtmlAndCss'
import Reactjs from './Components/Reactjs/Reactjs'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <div className="container">
            <div className="row">
              <div className="offset-1 col-10">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/htmlAndCss" component={HtmlAndCss}/>
                  <Route path="/reactjs" component={Reactjs}/>
                  <Route path="/resume" component={Resume}/>
                  <Route path="/contact" component={Contact}/>
                </Switch>
              </div>
              <div className="col-1">
                <Navbar/>
              </div>
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
