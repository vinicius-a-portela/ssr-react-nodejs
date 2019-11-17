/* This Project uses Express instead of Http as Shown in Next Documentation */

// IMPORTS
const express = require('express');
const next = require('next');
const fs = require('fs');

// Get Environment -> production / development
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

// If is in the Development Mode or Production Mode
const app = next({ dev });
const handle = app.getRequestHandler();

//Prepare Next App, Put here all redirects
app.prepare().then(()=>{
  //The Express Server
  const server = express();

  /* REDIRECTS */
  //Simple Redirect, by rendering other page
  server.get('/redirect', (req, res) => {
    return app.render(req, res, '/redirect_to_me', req.query)
  });

  //Use this if you're using static routes
  //server.get('/', (req, res) => {
  //  return app.render(req, res, '/index', req.query)
  //});

  //Api Example 1
  server.get('/api', (req, res) => {
    const data = require('./data');
    return res.send(data);
  });

  //Api Example 2
  server.get('/api2', (req, res) => {
    const data = {
      title: 'api-title',
      desc: 'one-description'
    };
    return res.send(JSON.stringify(data));
  });

  //Send HTML file directly 
  //(NOT RECOMENDED, This doesn't save in cache, so server has to reload every request)
  server.get('/hypertext', (req, res) => {
    fs.readFile('hypertext.html', 'utf8', (err, text) => {
        if(err) throw err;
        res.send(text);
    });
  });

  //Response all request to one folder
  //Use this when you want, for example, get images from a folder
  //But you don't want to set all images in server.get()
  server.get('/images/:image', (req, res) =>{
    //Check if exits
    //You get Params with req.params
    fs.access(`assets/images/${req.params.image}`, error => {
      if(!error){
        //I is image but you can put other mimes types
        res.header("Content-type", "image");
        //With this line the user will see the image instead of downloading it
        res.set("Content-Disposition", "inline;");

        fs.readFile(`assets/images/${req.params.image}`, (err, text) => {
          if(err) throw err;
          res.send(text);
        });
      }else{
        //Image or file, or everything you want, doesn't exists
        console.log(error);
        res.status(404);
        return app.render(req, res, '/_error', req.query)
      }
    });
  });

  server.get('/query', (req, res) => {
    //You can treat query params here or inside the page
    //Treating Here:
    //req.params.query.{query_name}
    //Example: req.params.query.username to https://example.com/query?username=test

    return app.render(req, res, '/query', req.query)
  });

  //FOR STATIC
  //This doesn't will redirect user if pages in url exists
  //That means if exits a page named as test_page in pages/
  //And the user type http:www.example.com/test_page the user won't be redirect
  //Just if you already putted a redirect to this page before
  
  //server.all('*', (req, res) => {
  //  res.status(404);
  //  return app.render(req, res, '/_error', req.query);
  //});

  //FOR DYNAMIC
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  /* REDIRECTS */

  server.listen(port, err => {
    if(err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  })
})