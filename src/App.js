import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Donation from './components/DonatePage'
import AboutUs from './components/AboutUs'
import Construct from './components/landingPageComonents/Construction';
import Footer from './components/Footer'


function App() {
  return (
    <div style={{overflowX:'hidden'}}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/donate" component={Donation}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/construction" component={Construct}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
