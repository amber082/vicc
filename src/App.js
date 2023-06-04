import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Donation from './components/DonationComp'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{overflowX:'hidden'}}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/donate" component={Donation}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
