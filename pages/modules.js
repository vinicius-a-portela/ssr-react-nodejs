/**
 * THE TEST FOR MODULES
 */
import React from 'react';

// Imports for withCss and withImage
import '../assets/css/my_custom.css';
import Image from '../assets/images/testing.png';

export default class Modules extends React.Component {
  render(){
    return(
      <>
        <h3 id='h1_custom'>If you seeing me purple is because withCss() worked!</h3>
        <h3>If you seeing this image is because withImage() worked!</h3>
        <img id='testing_image' alt='testing image' src={Image}/>
      </>
    );
  }
}