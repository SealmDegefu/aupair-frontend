import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import AuPair from './containers/AuPair';
import HostFamily from './containers/HostFamily';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Navbar/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import CreateListing from './components/CreateListing';
import axios from 'axios';


const aupairsURL = "http://localhost:9292/Aupair";
const hostFamiliesURL = "http://localhost:9292/hostFamily";

class App extends React.Component {

  state = {
    aupairs: [],
    hostFamilies: []
  }

handleAuPairs = (auPairData) => {
  this.setState({
    aupairs: auPairData
  
  })
}
handleHostFamilies = (hostFamilyData) => {
  this.setState({
    hostFamilies: hostFamilyData
  })
}

componentDidMount = () => {
  axios.get(aupairsURL, {crossDomain: true}, {withCredentials: true})
    .then((response) => console.log(response))
    //this.handleAuPairs(response.data))

  axios.get(hostFamiliesURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleHostFamilies(response.data))
}
  // fetch("http://localhost:9292/test")
  // .then((res) => res.json())
  // .then(console.log); 


render(){
  return (
    <Router>
   <Navbar />
   <Header />
   <Footer />
   <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/HostFamily">
    <HostFamily hostFamilyData={this.state.hostFamilies}/>
    </Route>
    <Route path="/Au-pair">
    <AuPair auPairData={this.state.aupairs}/>
    </Route>
    <Route path="/create-listing">
    <CreateListing />
    </Route>
    </Switch>
   </Router>
  );
}
}

export default App;
