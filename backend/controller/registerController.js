const { response } = require('express');
const userDetails = require('../models/userSchema');
const bcrypt = require('bcrypt');

class Register {
  signUp = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!email) {
        throw {
          message: 'Please enter a email',
        };
      }

      const passwordHash = bcrypt.hashSync(password);

      const response = await userDetails.create({
        name,
        email,
        password: passwordHash,
      });
      res.send({
        status: true,
        response: {
          name: response.name,
          email: response.email,
          id: response._id,
        },
        message: 'Successfully Register!!',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };
}

module.exports = new Register();
