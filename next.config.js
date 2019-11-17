/*
 *   NEXTJS CONFIG FILE
*/

// Modules to Use
// These Two Modules Allow the User to Loada Images and CSS
const withImage = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withImage({
  /* Insert Here all NextJS configuration */
  webpack: (config, {/*Varibles to Get from Webpack*/ /*isServer*/}) => {
    /* Insert Here all webpack configuration */

    //Example of Implementation
    //This is a common bug with Webpack and Node fs usage
    //REMEMBER TO IMPORT isServer BEFORE, INSIDE {}
    
    /**
     * if(!isServer) {
     *   config.node = {
     *     fs: 'empty'
     *   }
     * }
     */

    return config
  }
}));