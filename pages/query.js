import React from 'react';

export default class Query extends React.Component {
  static getInitialProps({query}) { return { query } };
  
  render(){
    const { data } = this.props;

    return(
      <>
        <h3>You have Submeted: </h3>
        <ul>
          {data.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
        }
      </>
    );
  }
}