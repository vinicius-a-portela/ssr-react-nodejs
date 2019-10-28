/**
 * CHECK IF THE USER IS CLIENT-SIDE OR SERVER-SIDE
 */
import React from 'react';

export default class ServerClient extends React.Component {
  //Check by getting the process.browser
  static getInitialProps() {
    if (process.browser) {
      return {server: true};
    }else{
      return {server: false};
    }
  };
  
  render(){
    return(
      <h1>Hey this was executed on {this.props.server ? 'server' : 'client'}!</h1>
    );
  }
}