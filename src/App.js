import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import AuPair from './containers/AuPair';
import HostFamily from './containers/HostFamily';
import AuPairFavorites from './containers/AuPairFavorites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import CreateListing from './components/CreateListing';
import Signup from './components/pages/Signup';
import LoginForm from './components/pages/LoginForm'
import axios from 'axios';


const aupairsURL = "http://localhost:9292/Aupair";
const hostFamiliesURL = "http://localhost:9292/Family";
const listingURL = "http://localhost:9292/Listing"
const favoritesURL = "http://localhost:9292/Favorite"

class App extends React.Component {

  state = {
    aupairs: [],
    hostFamilies: [],
    favorites: [],
    listings: [],
    user: {
      name: "",
      email: ""
    },
    error: "",
  }

   adminUser = {
    email:"admin@admin.com",
    password:"admin123"
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

handleListing = (listingData) => {
  this.setState({
    listings: listingData
  })
}
handleFavoritesData = (favoritesData) => {
  this.setState({
    favorites: favoritesData
  })
}
Login = details => {
 
 if (details.email == this.adminUser.email && details.password == this.adminUser.password){
    console.log("Logged in");
    this.setState({
      name: details.name,
      email: details.email
    });
  } else {
    console.log("Details do not match!");
    this.setState({error: "Details do not match!"})
  }
}

componentDidMount = () => {
  axios.get(aupairsURL, {crossDomain: true}, {withCredentials: true})
    .then((response) => this.handleAuPairs(response.data.aupair))
    

  axios.get(hostFamiliesURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleHostFamilies(response.data.family))

    axios.get(favoritesURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleHostFamilies(response.data.favorite))
}

addListing = (newListing) => {
    axios.post(listingURL, newListing)
    .then(() => this.setState({listings: [...this.state.listings, newListing] }))
}

Logout = () =>{
  this.setState({ name: "", email: ""});
  console.log("Logout");
}

// newFav=this.state.aupairs.id

addFavorite = (newFav) => {
  console.log(newFav)
  let postOption = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(newFav)
  }
  console.log(postOption)

 fetch(favoritesURL, postOption, {crossDomain: true}, {withCredentials: true})
      .then(res => res.json())
      .then(this.setState({ favorites: [...this.state.favorites, newFav] }))
  }

// addFavorite = (favoriteAuPair) => {
//   if (!this.state.favorites.find(alreadyFavorite => favoriteAuPair === alreadyFavorite))
//   {
//     axios.post(favoritesURL, favoriteAuPair,{crossDomain: true}, 
//       {withCredentials: true})
//     .then(() => this.setState({favorites: [...this.state.favorites, favoriteAuPair] }))
//   }    
// }


// removeFromFavorites = (favoriteItem) => {

//   axios.delete(favoritesURL + '/' + favoriteItem.id)
//     .then( () => 
//       this.setState({favorites: this.state.favorites.filter(oldFavorite => oldFavorite !== favoriteItem)})
//     )

// }

render(){
  return (
    <Router>
   <Navbar />
   <Footer />
   <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/host-families">
    <HostFamily hostFamilyData={this.state.hostFamilies}/>
    </Route>
    <Route path="/Favorites">
    <AuPairFavorites auPairData={this.state.aupairs} removeFromFavorites={this.removeFromFavorites} favoriteData={this.state.favorites} />
    </Route>
    <Route path="/Au-pair">
    <AuPair 
    auPairData={this.state.aupairs} 
    addFavorite={this.addFavorite}/>
    </Route>
    <Route path="/create-listing">
    <CreateListing 
    addListing={this.addListing}
    listing={this.state.listings}
    />
    </Route>
    <Route path="/sign-up">
    <Signup />
    </Route>
    <Route path="/sign-in">
    <div className ="App">
      {(this.state.email != "") ? (
          <div className="welcome">
          <h2>Welcome, <span>{this.state.name}</span></h2>
          <Link to='/'>
          <button onClick={this.Logout}>Return to Home</button>
          </Link>
          </div>
      ) : (

      <LoginForm Login={this.Login} error={this.error} />
      )}
    </div>
    </Route>
    </Switch>
   </Router>
  );
}
}

export default App;