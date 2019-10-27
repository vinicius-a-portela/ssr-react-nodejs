/**
 *  A COMPONENT IN NODEJS
 *  This is basically exact the same thing as in ReactJS
 */

import React from 'react';
//You can import CSS normaly with withCss() module
//import './my_component.css'

export default class Component extends React.Component {
  render(){
      return(
        <div class='component'>
          <h1>I'm a component :D</h1>
        </div>
      );
  }
}