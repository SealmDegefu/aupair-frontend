import React from 'react'
import HostFamilyCard from '../components/HostFamilyCard.js';

const HostFamily = (props) => {
    return(

        <div id="hostFamily-collection">
           {props.hostFamilyData.map(hostFamily => {
            return <HostFamilyCard
            hostFamily ={hostFamily}
            key = {hostFamily.id}
            />
        })}
        </div>
          
      )
          
    }

export default HostFamily;