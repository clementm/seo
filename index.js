const path = require('path');
const express = require('express');
const morgan = require('morgan');
const moment = require('moment');

const app = express();

app.use(
  morgan(
    ':date[iso] >>> :method :url :status :remote-addr - :response-time ms - :user-agent'
  )
);

app.get('/api/random', (req, res) => {
  const delay = req.query.delay && parseInt(req.query.delay) || 0;

  setTimeout(() => res.send(require('./names')()), delay);
});

app.get('/api/time', (req, res) => {
  const delay = req.query.delay && parseInt(req.query.delay) || 0;

  setTimeout(() => res.send(moment().toISOString()), delay);
});

app.get('/api/lapse', (req, res) => {
  const delay = req.query.delay && parseInt(req.query.delay) || 0;
  
  res.write(moment().toISOString() + '\n');
  setTimeout(() => {
    res.write(moment().toISOString());
    res.end();
  }, delay);
});

// Serve public folder statically
app.use(require('serve-static')(path.join(__dirname, './public')));

// 404 Handler
app.use((req, res) => res.status(404).send('<h1>404 : Not Found</h1>'));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is up and listening on port ${process.env.port || 5000}`)
);
