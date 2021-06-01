import React from 'react'

const AuPair = () => {
	return (
        <div className="card" key={this.props.aupair.id}>
            <img 
                className="family-img"
                src={this.props.aupair.images} 
                alt="family"
            />
			{/* need to go over what we want included */}
            <a href={this.props.aupair.url} target="_blank">
                <h2>
                    {this.props.aupair.fullName}
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

export default AuPair

