/**
 * THIS IS THE ERROR PAGE, YOU CAN CUSTOM TO WHATEVER YOU WANT
 */
import React from 'react'

function Error({ statusCode }) {
  return (
    <>
      <h1>Error Page -> Edit this page on pages/_error.js</h1>
      <p>
        {/* The Status Code just wanna be provided if it happened on Server-Side */}
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </>
  )
}

// Set getInitialProps() of Error Page, Used to get the statusCode
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error