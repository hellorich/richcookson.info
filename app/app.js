const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 5002;

app.use(sslRedirect());
app.use(helmet());
app.use(compression());

app.use(express.static('./public'));

app.listen(port, function() {
  console.log('Listening on port:' + port);
});
