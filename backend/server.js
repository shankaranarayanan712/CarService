const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  const badRouteResp = {
    code: 404,
    message: 'Oops the requested endpoint or type is not available, Please check the endpoint',
  };
  if (req.originalUrl === '/api/car/model' && req.method === 'GET') {
    next();
  } else { return res.json(badRouteResp); }
});

require('./app/routes/car.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}.`);
});

module.exports = app;
