import React from 'react'
import AuPairCard from '../components/AuPairCard.js';

const AuPair = (props) => {
    return(

        <div id="aupair-collection">
           {props.auPairData.map(auPair => {
            return <AuPairCard
            auPair ={auPair}
            key = {auPair.id}
            />
        })}
        </div>
          
      )
          
    }

export default AuPair;

