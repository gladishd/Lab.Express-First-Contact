const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


/* Middleware route; handles the request in between
 * the request coming in and a response coming out. */
app.get('*', (req, res, next) => {
  console.log(req.method, req.url); // these output on the same line in the terminal
  next();
})


// Respond with an HTML page on the root path:
app.get('/', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `)
})

app.get('/puppies', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Some puppies</title>
  </head>
  <body>
    <h1>saw a puppy</h1>
  </body>
 </html>
  `)
})

app.get('/puppies/:something', (req, res) => {
  res.send(`
  <html>
  <head>
    <title> ${req.params.something}</title>
  </head>
  <body>
    <h1>${req.params.something} another id </h1>
  </body>
 </html>
  `)
})

app.get('/kittens', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>some cats</title>
  </head>
  <body>
    <h1>Saw a cat!</h1>
  </body>
 </html>
  `)
})
