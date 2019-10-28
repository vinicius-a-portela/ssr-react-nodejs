/**
 *  FETCH EXAMPLE
 * 
 *  You can fetch data from external server or localhost
 */
import React from 'react';
import fetch from 'isomorphic-unfetch';

export default class Fetch extends React.Component {
  //The fetch can be done here or on componentDidMounted()
  static async getInitialProps() {
    /* For internal api */
    //const res = await fetch('http://localhost:8080/api');  

    /* For external api */
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { data };
  };

  //Well, this is a way, but not the recomended one
  //So, you can use fetch on constructor/componentDidMount.
  //Or, you can also use hooks
  componentWillMount(){
    this.setState({
      data: this.props.data
    })
  }

  //Another way, recomended
  //Remember to check if data was setted before rendering it on render() function
  //async componentDidMount(){
  //  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //  const data = await res.json();
  //  this.setState({data});
  //}
  
  render(){
    return(
      <>
        API Data:
        <ul>
          {
            Object.keys(this.state.data).map((item)=>{
              return <li>{item} = {JSON.stringify(this.state.data[item])}</li>
            })
          }
        </ul>
      </>
    );
  }
}