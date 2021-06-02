import React, { Component } from 'react';

class AuPairCard extends Component {
  aupairArray = [
    "https://st.depositphotos.com/1594308/3290/i/950/depositphotos_32904189-stock-photo-pretty-girl.jpg",
    "https://st.depositphotos.com/1937573/2311/i/950/depositphotos_23115590-stock-photo-young-smiling-girl-dressed-in.jpg",
    "https://static9.depositphotos.com/1049680/1209/i/950/depositphotos_12095068-stock-photo-woman-holding-a-coconut.jpg",
    "https://st4.depositphotos.com/13193658/30811/i/1600/depositphotos_308113570-stock-photo-african-american-woman-yellow-pullover.jpg",
    "https://st3.depositphotos.com/8527202/18724/i/1600/depositphotos_187248956-stock-photo-beautiful-young-asian-girl-have.jpg",
    "https://st2.depositphotos.com/2853475/8936/i/950/depositphotos_89369480-stock-photo-smiling-woman-with-umbrella.jpg",
    "https://st4.depositphotos.com/13193658/22194/i/1600/depositphotos_221942530-stock-photo-happy-transgender-man-white-shirt.jpg",
    "https://st.depositphotos.com/1104564/4474/i/950/depositphotos_44748431-stock-photo-farmer-milking-goats.jpg",
    "https://st4.depositphotos.com/13185108/27107/i/1600/depositphotos_271074824-stock-photo-happy-latin-man-holding-soccer.jpg",
    "https://st4.depositphotos.com/16405760/20466/i/1600/depositphotos_204661762-stock-photo-brunette-woman-curly-hair-holding.jpg"
  ]
    render() {
      
    return (
      
      <div className="aupair-card" id={this.props.auPair.id}>
      {/* <img src={this.${aupairArray[Math.floor(Math.random()*aupairArray.length)]}}/> */}
        <h4>{this.props.auPair.name}</h4>
        <p>Age: {this.props.auPair.age} </p>
        <p>Nationality: {this.props.auPair.nationality} </p>
        <p>Years of Experience: {this.props.auPair.years_of_experience}  </p>
      </div>
    );
  }

}

export default AuPairCard;