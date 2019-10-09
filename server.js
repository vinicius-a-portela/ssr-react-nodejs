const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Get NODE_ENV
const dev = process.env.NODE_ENV !== 'production'

// If is in the dev mode or production
// It is like: app = express();
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(()=>{
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if(pathname === '/a'){
      //Rendering Server-Side with NextJS + Pass all data, req, res ...
      app.render(req, res, '/b', query);
    } else if(pathname === '/b'){
      //Rendering Server-Side with NextJS
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if(err) throw err;
    console.log('Ready on http://localhost:3000');
  })
})