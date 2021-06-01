import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import AuPair from './containers/AuPair';
import HostFamily from './containers/HostFamily';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Navbar/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import CreateListing from './components/CreateListing';
import axios from 'axios';


const aupairsURL = "http://localhost:9292/aupair";
const hostFamiliesURL = "http://localhost:9292/hostFamily";

function App() {

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
  axios.get(aupairsURL)
    .then((response) => this.handleAuPairs(response.data))

  axios.get(favoritesURL)
    .then(response => this.handleFavoritesData(response.data))
}
  // fetch("http://localhost:9292/test")
  // .then((res) => res.json())
  // .then(console.log); 



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
    <Route path="/host-families">
    <HostFamily />
    </Route>
    <Route path="/Au-pair">
    <AuPair />
    </Route>
    <Route path="/create-listing">
    <CreateListing />
    </Route>
    </Switch>
   </Router>
  );
}

export default App;
