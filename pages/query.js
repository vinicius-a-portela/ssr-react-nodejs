/**
 *  QUERY AND GET INITIAL PROPS EXAMPLE
 * 
 *  Get the query params in the getInitialProps that can be executed
 *  on server-side (at first time) or client-side (others times)
 */
import React from 'react';

export default class Query extends React.Component {
  //Get Query and put it in 'this.pros'
  static getInitialProps({query}) { return { query } };
  
  render(){
    const data = this.props.query;
    return(
      <>
        <h3>You have Submeted: </h3>
        <ul>
          {Object.keys(data).map((item)=>{
            return <li>{item} = {data[item]}</li>
          })}
        </ul>
      </>
    );
  }
}