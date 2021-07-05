const bcrypt = require('bcryptjs');
const connection = require('../db/db-mysql');
const { ErrorHandler } = require('../helpers/error');
const jwt = require('jsonwebtoken');

//create user
const signUp = async (req, res, next) => {
  const { body } = req;
  if (body.password != undefined) {
    body.password = await bcrypt.hash(body.password, 8);
  }
  try {
    const newUser = await connection.query(
      'INSERT INTO users SET ? ',
      body,
      (err) => {
        if (err) throw new ErrorHandler(400, 'Something Went Wrong');
        console.log('User Added');
        return res.status(200).send({ data: newUser.values });
      }
    );
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res) => {
  const { body } = req;
  const useWithEmail = await connection.query(
    `SELECT name , password , email FROM users WHERE email= "${body.email}"`,
    async (err, result) => {
      if (err) return res.status(400).send({ error: 'Not Found' });
      const isMatch = await bcrypt.compare(body.password, result[0].password);
      if (isMatch) {
        const token = jwt.sign({}, 'secret_key', { expiresIn: '5m' });
        result[0].token = token;
        return res.send({ data: result[0] });
      }
      return res.status(400).send({ error: 'Unable To Login' });
    }
  );
};

module.exports = {
  signUp,
  signIn,
};
