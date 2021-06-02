
import React, { Component } from 'react';

class HostFamilyCard extends Component {

    render() {
    return (
      <div className="HostFamily-card" id={this.props.hostFamily.id}>
        <h2>{this.props.hostFamily.lastname}</h2>
        <p>Number of Children: {this.props.hostFamily.number_of_children}  </p>
        <p>Location: {this.props.hostFamily.location} </p>
      </div>
    );
  }

}

export default HostFamilyCard;