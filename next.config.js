/*
 *   NEXTJS CONFIG FILE
*/

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  useFileSystemPublicRoutes: true, // Change to False, to don't read pages/
});