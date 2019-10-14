const express = require('express');
const next = require('next');

// Get NODE_ENV
const dev = process.env.NODE_ENV !== 'production'

// If is in the dev mode or production
// It is like: app = express();
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(()=>{
  const server = express();

  //Redirect Test
  server.get('/teste', (req, res) => {
    return app.render(req, res, '/test', req.query)
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/index', req.query)
  });

  server.all('*', (req, res) => {
    res.status(404);
    return app.render(req, res, '/_error', req.query)
  });

  /*
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if(pathname === '/test'){
      //Rendering Server-Side with NextJS + Pass all data, req, res ...
      app.render(req, res, '/testudo', query);
    } else if(pathname === '/b'){
      //Rendering Server-Side with NextJS
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl);
    }
  })*/

  server.listen(3000, err => {
    if(err) throw err;
    console.log('Ready on http://localhost:3000');
  })
})