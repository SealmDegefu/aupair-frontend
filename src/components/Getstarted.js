import React from 'react';
import '../App.css';
import { Button } from './Button';
import './GetStarted.css';
import { MdPlayCircleFilled } from 'react-icons/md';


function GetStarted() {

 
  return (
    <div className='hero-container'>
      <h1>AU PAIR'd</h1>
      <p>Introducing families to great talent since 1990</p>
      <div className='hero-btns'>
        <p>click below to create a profile</p>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
      <div>
       <p>Already have a profile? Click the Sign In button at the top of the page</p>
       </div>
    </div>
  );
}

export default GetStarted;