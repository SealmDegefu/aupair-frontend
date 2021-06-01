import React, { Component } from 'react';

class HostFamilyCard extends Component {

    render() {
    return (
      <div className="HostFamily-card" id={this.props.hostFamily.id}>
        <h2>{this.props.hostFamily.name}</h2>
        <p>{this.props.hostFamily.number_of_children} Number of Children: </p>
        <p>{this.props.hostFamily.location} Location:</p>
      </div>
    );
  }

}

export default HostFamilyCard;