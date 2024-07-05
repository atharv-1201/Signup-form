// SIGNUP FORM/
// ├── app.js
// ├── routes.js
// ├── confirm.js
// ├── service.js
// ├── config.js
// ├── public/
// │   ├── index.html
// │   ├── styles.css
// │   └── script.js


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || config.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

module.exports = app;

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}


