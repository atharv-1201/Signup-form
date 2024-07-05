module.exports = function(app) {
    const confirm = require('./confirm');
    
    app.post('/signup', confirm.signup);
  };
  