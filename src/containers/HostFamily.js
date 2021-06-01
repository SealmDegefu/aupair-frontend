import React, {Component} from 'react';


class HostFamily extends React.Component {

    
    render(){
        return (
        <div className="card" key={this.props.HostFamily.id}>
            <img 
                className="family-img"
                src={this.props.family.images} 
                alt="family"
            />
			{/* need to go over what we want included */}
            <a href={this.props.family.url} target="_blank">
                <h2>
                    {this.props.family.fullName}
                </h2>
            </a>
            {/* <h3 className="states">
                {this.props.park.states}
            </h3> */}
            <p>
                {/* {this.props.family.description} */}
            </p>
            {/* <button className="like-btn"onClick={()=>this.props.handleClick(this.props.family)}>Favorite ⭐️ </button> */}
        </div>
        );
    }
}

export default HostFamily