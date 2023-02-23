const { response } = require('express');
const userDetails = require('../models/userSchema');
const bcrypt = require('bcrypt');

class Login {
  signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { message: 'Email is required' };
      }
      if (!password) {
        throw { message: 'Password is required' };
      }
      const findCredentials = await userDetails.find({ email });
      if (findCredentials.length == 0) {
        throw { message: 'signUp is Required' };
      }
      if (bcrypt.compareSync(password, findCredentials[0].password)) {
        return res.status(202).send({
          message: 'LogIn Successfully',
          error: false,
          data: {
            id: findCredentials[0]._id,
            name: findCredentials[0].name,
            email: findCredentials[0].email,
          },
        });
      } else {
        throw { message: 'Password is wrong!' };
      }
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getUser = async (req, res) => {
    const userId = req.query.userId;
    const response = await userDetails
      .findOne({ userId: userId })
      .populate('userId');
    res.send(response);
  };

  updateUser = async (req, res) => {
    const id = req.body.id;
    const response = await userDetails.updateMany({ _id: id });
    res.send(response);
  };
}

module.exports = new Login();
