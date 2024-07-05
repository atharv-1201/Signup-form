const service = require('./service');

exports.signup = (req, res) => {
  const { name, email, age, pancard } = req.body;

  if (!name || !email || !age || !pancard) {
    return res.status(400).send('Please fill in all fields.');
  }

  service.insertUser({ name, email, age, pancard }, (err, result) => {
    if (err) {
      return res.status(500).send('Error inserting data.');
    }
    res.send('Signup successful!');
  });
};
