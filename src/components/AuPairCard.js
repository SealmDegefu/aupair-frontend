import React, { Component } from 'react';

class AuPairCard extends Component {

    render() {
    return (
      <div className="aupair-card" id={this.props.auPair.id}>
        <h2>{this.props.auPair.name}</h2>
        <p>{this.props.auPair.age} Age: </p>
        <p>{this.props.auPair.years_of_experience} Years of Experience: </p>
        <p>{this.props.auPair.nationality} Nationality:</p>
      </div>
    );
  }

}

export default AuPairCard;