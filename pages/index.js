/**
 *  THE INDEX PAGE
 */
import React from 'react';
import Link from 'next/link';
import '../assets/css/index.css';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <div class='header'>
          <h1>next-react-express</h1>
        </div>

        <b>This page is a example of linking</b> (Edit this page, pages/index.js)<br/>
        Also, Other Examples:
        <ol>
          <li>
            <Link href='/modules'>
              <a>Test the WithCss() and WithImage() modules</a>
            </Link>
          </li>
          <li>
            <Link href='/component'>
              <a>Test Component</a>
            </Link>
          </li>
          <li>
            <Link href='/redirect'>
              <a>Test Redirect</a>
            </Link>
          </li>
          <li>
            <Link href='/api'>
              <a>Example of API</a>
            </Link>
          </li>
          <li>
            <Link href='/images/testing.png'>
              <a>Image Example</a>
            </Link>
          </li>
          <li>
            <Link href='/query?username=test&pass=123456'>
              <a>Query and GetInitialProps()</a>
            </Link>
          </li>
          <li>
            <Link href='/fetch'>
              <a>Fetch a API</a>
            </Link>
          </li>
          <li>
            <Link href='/server_or_client'>
              <a>Check if is Server-Side or Client-Side</a>
            </Link>
          </li>
          <li>
            <Link href='/_error'>
              <a>Test Error Page</a>
            </Link>
          </li>
          <li>
            <a 
              href='https://github.com/vinicius-portela'
              target='_blank'
              >
              External Links you can use just {'<a>'}
            </a>
          </li>
        </ol>

        Find more about on github repository:
        <a href='https://www.github.com/vinicius-portela/next-react-express' target='_blank'>
          https://www.github.com/vinicius-portela/next-react-express
        </a>
      </div>
    );
  }
}