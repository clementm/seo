const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(
  morgan(
    ':date[iso] >>> :method :url :status :remote-addr - :response-time ms - :user-agent'
  )
);

// 404 Handler
app.use((req, res) => res.status(404).send('<h1>404 : Not Found</h1>'));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is up and listening on port ${process.env.port || 5000}`)
);
