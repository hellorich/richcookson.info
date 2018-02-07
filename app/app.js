const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const port = 5002;

app.use(sslRedirect());
app.use(helmet());
app.use(compression());

app.use(express.static('./dist'));

app.listen(port, function() {
  console.log('Listening on port:' + port);
});
